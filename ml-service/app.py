from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

app = Flask(__name__)

API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY not set. Run: export GEMINI_API_KEY=your_key_here")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("models/gemini-2.5-pro")

@app.route("/recommend", methods=["POST"])
def recommend():
    try:
        data = request.get_json()
        saved_posts = data.get("saved_posts", [])
        properties = data.get("properties", [])

        if not saved_posts or not properties:
            return jsonify({"error": "Missing saved_posts or properties"}), 400

        # Build Gemini prompt
        prompt = "You are a recommendation engine for real estate listings.\n"
        prompt += "The user has saved these posts:\n"

        for sp in saved_posts:
            pd = sp.get("postDetail", {})
            prompt += (
                f"- ID {sp.get('id', 'N/A')}: {sp.get('title', 'No title')}, "
                f"Price: ${sp.get('price', 'N/A')}, Type: {sp.get('type', 'N/A')}, "
                f"Property: {sp.get('property', 'N/A')}, Bedrooms: {sp.get('bedroom', 'N/A')}, "
                f"Bathrooms: {sp.get('bathroom', 'N/A')}, Address: {sp.get('address', '')}, "
                f"City: {sp.get('city', '')}, Latitude: {sp.get('latitude', '')}, Longitude: {sp.get('longitude', '')}, "
                f"Category: {sp.get('category', 'N/A')}, Images: {', '.join(sp.get('images', []))}, "
                f"Description: {pd.get('desc', '')}, Utilities: {pd.get('utilities', '')}, "
                f"Pet: {pd.get('pet', '')}, Income: {pd.get('income', '')}, Size: {pd.get('size', '')}, "
                f"School: {pd.get('school', '')}, Bus: {pd.get('bus', '')}, Restaurant: {pd.get('restaurant', '')}\n"
            )

            prompt += "\nAvailable properties to recommend from:\n"
            for p in properties:
                pd = p.get("postDetail", {})
                prompt += (
                    f"- ID {p.get('id', 'N/A')}: {p.get('title', 'No title')}, "
                    f"Price: ${p.get('price', 'N/A')}, Type: {p.get('type', 'N/A')}, "
                    f"Property: {p.get('property', 'N/A')}, Bedrooms: {p.get('bedroom', 'N/A')}, "
                    f"Bathrooms: {p.get('bathroom', 'N/A')}, Address: {p.get('address', '')}, "
                    f"City: {p.get('city', '')}, Latitude: {p.get('latitude', '')}, Longitude: {p.get('longitude', '')}, "
                    f"Category: {p.get('category', 'N/A')}, Images: {', '.join(p.get('images', []))}, "
                    f"Description: {pd.get('desc', '')}, Utilities: {pd.get('utilities', '')}, "
                    f"Pet: {pd.get('pet', '')}, Income: {pd.get('income', '')}, Size: {pd.get('size', '')}, "
                    f"School: {pd.get('school', '')}, Bus: {pd.get('bus', '')}, Restaurant: {pd.get('restaurant', '')}\n"
                )

            prompt += (
                "\nSuggest 3 property IDs that best match the user's interests. "
                "Return only a comma-separated list of IDs, no explanations."
            )

        # Ask Gemini
        response = model.generate_content(prompt)
        raw_text = (response.text or "").strip()

        if not raw_text:
            return jsonify({"error": "No recommendations generated"}), 500

        # Parse output into list
        recommended_ids = [pid.strip() for pid in raw_text.split(",") if pid.strip()]
        recommendations = recommended_ids[:3]

        return jsonify({"recommendations": recommendations})

    except Exception as e:
        print(f"Error in /recommend: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)

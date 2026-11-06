# Predicting Flood Damage: Building an End-to-End ML Web App for Telangana

*How I built a Flask application using a Random Forest model to estimate crop loss and economic impact across 33 districts in Telangana.*


When a flood hits, the immediate question for farmers and local officials is: *How bad is the crop damage, and what is the economic loss?* As my final year B.Tech project, I wanted to take a step beyond a static Jupyter Notebook and build an actual web application. I created a Flask-based system that takes flood and crop parameters and predicts the impact — providing a tool that could theoretically help with rapid scenario planning.

## The question

Given a specific set of weather, geographic, and agricultural conditions, can a machine learning model accurately predict the percentage of crop loss, and can those predictions be translated into actionable economic estimates for all 33 districts of Telangana?

## The data

Since real, granular crop-loss data per district is not publicly available for every flood event, I built a synthetic dataset. I used agronomic damage curves from the Indian Council of Agricultural Research (ICAR) and rainfall thresholds from the Indian Meteorological Department (IMD) to generate realistic data.

**Transparency note:** The dataset is partially synthetic. It contains 50 baseline records covering 17 crops and 15 features (rainfall, flood duration, elevation, soil type, crop stage, etc.). The predictions are indicative estimates for academic purposes and should not be used for official disaster planning.

## Defining the architecture first

Before writing any ML code, I mapped out the system. I didn't just want a script that printed a number; I wanted an interactive tool. I divided the system into three layers:
1. **The ML Engine:** A Random Forest Regressor to predict crop loss percentage.
2. **The Economic Calculator:** A logic layer that takes the crop loss and applies sector multipliers to estimate direct loss, supply chain impact, and total economic loss.
3. **The Web App:** A Flask backend to tie it together and a Jinja2/HTML frontend for the user interface.

## What I did

1. **Trained the ML model.** I used a Random Forest Regressor (15 features, 80/20 train-test split, 5-fold cross-validation) to predict crop loss. I chose Random Forest because it handles non-linear relationships (like the interaction between soil type and rainfall duration) better than linear models.
2. **Built a scenario analysis engine.** I added a feature that lets users compare a "baseline" scenario against "moderate" and "extreme" flood scenarios.
3. **Developed the Flask backend.** I set up routes for the prediction form, the results page, an analytics dashboard (showing MAE, RMSE, R²), and an API-like logic flow to pass the model's output into the economic calculator.
4. **Designed the frontend.** Using Jinja2 templates, I built an interface that not only shows the predicted loss percentage but also gives actionable recommendations (evacuation alerts, insurance guidance, and market warnings).
5. **Deployed to Render.** I containerised the app using `gunicorn` and deployed it to Render.com so it can be accessed live.

## What I found

- **District vulnerability varies widely.** By categorizing the 33 districts into North, Central, and South agro-climatic zones, the system highlighted that certain zones are consistently at higher risk for extreme economic loss when rainfall crosses IMD thresholds.
- **Crop loss is heavily dependent on crop stage.** The model learned that a flood hitting during the "flowering" or "germination" stage causes vastly more damage than the same flood during a fallow period.
- **Economic impact is a multiplier, not just a number.** A 30% crop loss doesn't mean a 30% economic loss. When supply chain disruption is factored in, a 30% crop loss can cascade into a much higher total economic impact for the district.

## What went wrong

*(Replace with a real issue you faced, but here is a likely one based on your tech stack)*

**The Model and the App were out of sync.** Early on, I saved the trained model using `pickle` and loaded it into the Flask app. But the Flask form was sending data in a different order than the model was trained on, leading to nonsensical predictions (like negative crop loss). I had to refactor the data pipeline to explicitly map the form inputs to the feature names the model expected before passing them to `model.predict()`.

## What I learned

- **Deploying is harder than building.** Building the Random Forest took an afternoon. Getting the Flask app to run smoothly on Render.com, handling missing CSV files gracefully, and setting up the `gunicorn` start command took much longer. It taught me that a model isn't useful until it's accessible.
- **Synthetic data must be grounded in reality.** Because I used ICAR and IMD parameters to generate the data, the model's predictions feel logical. If I had just used random numbers, the model would have learned nothing useful.
- **Documentation matters.** The README includes a "Transparency Note" and a "How to Run Locally" guide. This is crucial for academic projects so anyone grading or reviewing it knows exactly what is real data and what is synthetic.

## What I would do next

If I had access to real historical data from the Telangana State Disaster Management Authority (SDMA), I would retrain the model on actual recorded crop losses rather than synthetic data. I would also add user authentication so different district officials could log in and save their scenario reports, and potentially integrate a live weather API to pull real-time rainfall data.

## Tools

Python, Flask, scikit-learn, pandas, NumPy, HTML, CSS, Jinja2, Render (Deployment), Git.

---

You can see the live app, source code, and documentation on GitHub: [Telangana Flood Impact Prediction System](https://github.com/Adeen0504/Predicting-Flood-Impact-On-Agriculture-And-Economy).

**My role:** I designed the system architecture, generated the synthetic dataset, trained the Random Forest model, built the Flask app, and handled the deployment. AI assistance (Claude) was used to help write the frontend templates and debug the Flask routing.

I'm a fresher data analyst in Hyderabad, so feedback is very welcome. You can find me on [LinkedIn](https://www.linkedin.com/in/adeen-ali).
# Who Crashes, Where, and Why? Analysing 12,316 Road Traffic Accidents in Python

*How I cleaned and explored a 32-column road accident dataset to find patterns in driver experience, weather, and severity.*


Road accidents are usually reported as raw numbers — a total count of crashes or fatalities. But a single number hides the context: Was it day or night? Was the road wet? Was the driver new? I used Python to break down over 12,000 accidents to see what actually separates a safe drive from a serious one, and to find patterns that could inform road safety.

## The question

Do accidents differ by time of day? Do new and experienced drivers crash in different ways? What are the main causes of accidents, and how do wet roads change the picture?

## The data

The dataset contains 12,316 rows and 32 columns (one row per accident), provided by the Imarticus module. It covers driver details, vehicle types, road conditions, weather, and casualty severity.

## What I did

1. **Understood and cleaned the data.** I checked the shape and data types, looked for blanks and duplicates (there were no duplicates). I stripped extra spaces from text columns so that the same location wasn't counted as two separate places. I left actual blanks as they were rather than guessing.
2. **Added calculated columns.** I extracted the `Hour` from the time, grouped it into `Time_period` (day/night), and created a `Driver_experience_group`. I defined "inexperienced" as having under 2 years of driving experience or no licence at all.
3. **Explored the data (EDA) using percentages.** Because some groups (like slight injuries) are vastly larger than others (like fatal injuries), comparing raw counts is misleading. I compared groups using percentages so larger groups didn't look worse just for being larger.
4. **Wrote 4 insights and built 4 charts** to visualise the findings.

## What I found

- **Collision types are nearly identical day and night.** Vehicle-to-vehicle collisions make up 72.6% of daytime accidents and 71.1% of night-time accidents. The time of day doesn't change *how* cars hit each other.
- **New and experienced drivers crash similarly — with one exception.** Rollovers are the only major difference: they account for 4.2% of crashes for inexperienced drivers, compared to just 3.0% for experienced ones. (About 830 accidents with no experience record were excluded from this comparison).
- **Young drivers dominate the accident count.** Drivers aged 18–30 make up 39.2% of fatal accidents, and roughly 35% of serious and slight accidents. *(Note: This shows who is in the accidents, not who is most at risk, since we don't have the total number of young drivers on the road).*
- **"Not keeping a safe distance" is the top cause almost everywhere.** It causes 21.4% of accidents in recreational areas, 19.0% in church areas, and 18.6% in office areas. The only exception is hospital areas, where "changing lanes to the left" is the top cause.
- **Wet roads are a night-time problem.** Wet or damp roads account for 37.3% of night accidents, compared to only 18.1% of day accidents. Without sunlight, wet roads become significantly more dangerous.
- **Most accidents are not fatal.** 84.6% result in slight injuries, 14.2% are serious, and only 1.3% (about 160 accidents) are fatal.

## What went wrong

During cleaning, I found one place label that read "Rural village areasOffice areas" (about 20 rows). It looked like two names stuck together by a data entry error. I couldn't confidently tell which of the two places the driver actually meant, so rather than guessing and skewing the location data, I left it as-is and noted it as a limitation.

## What I learned

- **Percentages matter more than counts.** Looking at raw counts would have made the most common accident types look like the most severe ones. Comparing percentages within each severity group revealed the actual risks.
- **Data cleaning is about restraint.** It was tempting to "fix" the stuck-together location label, but guessing would introduce fake data. Leaving blanks and errors intact (and explaining why) keeps the analysis honest.

## What I would do next

If I had more time, I would try to bring in external data on the total number of licensed drivers by age group. That would let me calculate the actual *risk* per age group, rather than just their share of the accidents. I would also push for better data collection on location names so the "Other" category isn't the largest group.

## Tools

Python, pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook.

---

You can see the full notebook and code on GitHub: [Road Traffic Accident Analysis](https://github.com/Adeen0504/road-accident-analysis).

**My role:** I decided what to analyse and how to approach it. AI assistance was allowed for this module project.

I'm a fresher data analyst in Hyderabad, so feedback is very welcome. You can find me on [LinkedIn](https://www.linkedin.com/in/adeen-ali).
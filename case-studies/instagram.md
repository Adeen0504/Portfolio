# Instagram Liked Posts Analysis
### Understanding Personal Content Preferences Through Data

**Project Type:** Exploratory Data Analysis (EDA)  
**Tools:** Python, Pandas, NumPy, BeautifulSoup, Matplotlib  
**Domain:** Social Media Analytics

---

## 1. Project Overview

What can our Instagram activity reveal about the type of content we consume?

This project explores my Instagram liked-post history to understand my content preferences, frequently liked creators, popular content categories, and activity patterns over time.

Instead of working with an already structured dataset, I started with Instagram's exported HTML data and built a complete data processing workflow. The raw HTML files were parsed, transformed into a structured dataset, cleaned, categorized using hashtags, and analyzed using Python.

The objective was to turn raw social media activity into meaningful observations through exploratory data analysis and visualization.

## 2. The Problem

Social media platforms generate large amounts of user activity data, but raw exported data is not immediately suitable for analysis.

The challenge was to extract useful information from Instagram's HTML export and organize it into a format that could answer questions such as:

- Which content categories do I interact with the most?
- Which creators appear most frequently in my liked posts?
- What hashtags are commonly associated with my interests?
- During which time of the day am I more active?
- How has my liking activity changed over time?

To answer these questions, I needed to build a data extraction, preprocessing, and analysis workflow.

## 3. Data Collection

The dataset was obtained through Instagram's Download Your Information feature.

I selected the Likes data in HTML format, which provided the liked-post information in HTML files.

The original export contained approximately 1,500 liked posts.

Since the exported information was stored in HTML rather than a structured CSV format, I used **BeautifulSoup** to parse the HTML elements and extract relevant information.

The extracted attributes included:

- Post and Reel URLs
- Captions
- Hashtags
- Creator usernames
- Owner information
- Timestamps

The extracted information was then converted into a Pandas DataFrame for further processing.

## 4. Data Cleaning and Preparation

After extracting the information, the next step was to prepare the dataset for analysis.

I used Pandas to organize and clean the extracted data.

The preprocessing included:

- Removing unnecessary whitespace.
- Handling missing values.
- Formatting extracted columns.
- Structuring captions and hashtags.
- Preparing timestamp information for analysis.
- Creating a cleaned dataset for subsequent visualization.

I also performed feature engineering to make the data more useful.

For example, timestamps were converted into datetime objects, allowing me to extract additional attributes such as:

- Hour
- Month
- Year

These attributes helped analyze liking activity across different time periods.

## 5. Content Categorization

One of the important parts of this project was identifying the types of content I interacted with.

I implemented a hashtag-based keyword mapping approach to categorize posts.

Hashtags were compared against predefined keyword groups, allowing posts to be classified into different content categories.

The categories included:

- Technology
- Sports
- Fitness
- Comedy
- Movies & TV
- Food
- Travel
- Education
- Other

This transformed individual liked posts into categorized data that could be analyzed to understand broader content preferences.

## 6. Exploratory Data Analysis

After preparing the dataset, I performed exploratory analysis to identify patterns in my Instagram activity.

### Content Category Distribution

Analyzed how liked posts were distributed across different content categories to identify the topics that received the most engagement.

### Top Liked Creators

Examined creator usernames to identify accounts appearing most frequently in the liked-post history.

### Most Frequently Used Hashtags

Analyzed hashtag frequency to identify recurring topics and keywords across liked posts.

### Day vs Night Activity

Grouped liking activity into two time periods:

- Day: 6 AM – 6 PM
- Night: 6 PM – 6 AM

This helped identify whether my liking activity was more concentrated during the daytime or nighttime.

### Monthly Activity Trends

Grouped liked posts by month and year to observe changes in activity over time.

This analysis helped identify variations in engagement patterns across different periods.

## 7. Key Findings and Observations

The analysis revealed several interesting patterns:

**1. Technology was the leading content category**

Technology appeared in 123 liked posts, making it the most frequently occurring category in the analysis.

**2. Nighttime activity was higher**

Approximately 56% of liked posts occurred during nighttime hours, indicating that my Instagram liking activity was more concentrated at night.

**3. #viral was the most frequently occurring hashtag**

The hashtag #viral appeared 22 times, making it the most frequently used hashtag in the analyzed dataset.

**4. Creator and content patterns**

Creator frequency and category distribution provided another way to understand which accounts and content types appeared repeatedly in my activity.

**5. Activity changed across months and years**

Monthly trend analysis allowed me to examine how my liking activity varied over time rather than looking only at the overall totals.

## 8. Technical Implementation

The project was organized into separate notebooks to maintain a modular workflow.

| Component | Implementation |
|---|---|
| Data Extraction | BeautifulSoup |
| Data Processing | Pandas |
| Feature Engineering | Pandas Datetime |
| Content Categorization | Hashtag-based keyword mapping |
| Exploratory Analysis | Pandas and NumPy |
| Data Visualization | Matplotlib |
| Development Environment | Jupyter Notebook |

The workflow was divided into three main stages:

1. **Scraping:** Extracting information from Instagram HTML files.
2. **Cleaning:** Processing and preparing the extracted information.
3. **Visualization:** Exploring patterns and generating charts.

## 9. Challenges and Considerations

**Working with semi-structured data**

The original data was stored in HTML, requiring HTML parsing and transformation before it could be analyzed.

**Handling extracted information**

Some attributes required additional formatting and preprocessing to make them suitable for analysis.

**Content categorization**

Hashtag-based classification depends on the availability and relevance of hashtags. Posts without recognizable hashtags may be assigned to the Other category.

**Privacy considerations**

The original Instagram export contains personal information. Therefore, the repository uses anonymized data and sanitized HTML samples to protect usernames, owner information, timestamps, and post URLs.

## 10. Conclusion

This project demonstrates how raw, semi-structured social media data can be transformed into a structured dataset and explored to identify meaningful patterns.

Through HTML parsing, data cleaning, feature engineering, content categorization, and exploratory data analysis, I was able to understand my Instagram content preferences and activity patterns.

More importantly, the project gave me practical experience working with data that required extraction and preparation before meaningful analysis could begin.

## 11. Future Improvements

There are several ways this project could be extended:

- Implement NLP-based content categorization instead of relying entirely on hashtags.
- Perform sentiment analysis on post captions.
- Build an interactive dashboard using Power BI or Streamlit.
- Explore more detailed engagement patterns.
- Automate the complete data extraction and processing workflow.

---

**Project Repository:** [GitHub - Instagram EDA](https://github.com/Adeen0504/INSTAGRAM_EDA)

**Technologies:** Python · Pandas · NumPy · BeautifulSoup · Matplotlib
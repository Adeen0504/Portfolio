# Hotel Booking Revenue Analysis
### An Excel-Based Analysis of Hotel Revenue, Booking Performance, and Revenue Loss

**Project Type:** Data Analytics – Independent Excel Project  
**Tools:** Microsoft Excel  
**Dataset:** 7,000 Hotel Bookings · 4 Hotel Branches  
**Analysis Period:** January – December 2023  
**Development Approach:** Independent Analysis with Minimal AI Assistance

---

## 1. Project Overview

This project focuses on analyzing hotel booking data to understand revenue performance, booking patterns, customer behaviour, and potential revenue losses.

The objective was to build an interactive Excel dashboard that could help hotel management distinguish between revenue already earned, revenue expected from future bookings, and revenue lost through cancellations and no-shows.

Unlike a basic sales dashboard, this project required defining meaningful business metrics before beginning the analysis.

I independently worked on understanding the dataset, deciding which business questions to investigate, defining KPIs, preparing the data, creating PivotTables, and developing the final dashboard.

AI was primarily used as a conversational assistant to discuss the analytical approach, evaluate possible metrics, and help me reach decisions about what to calculate and why.

The actual analysis and Excel implementation were primarily carried out by me.

## 2. Business Problem

A hotel may have thousands of bookings throughout the year, but the total booking value does not necessarily represent the revenue it has actually earned.

For example:
- Some guests have already completed their stay and paid.
- Some bookings are confirmed but guests have not arrived yet.
- Some bookings are cancelled.
- Some guests never arrive despite making a reservation.

Combining all these bookings into a single revenue figure can create a misleading picture of the hotel's financial performance.

The objective was to analyze these different booking outcomes separately and answer questions such as:

- How much revenue has the hotel actually realized?
- How much revenue is still expected from confirmed bookings?
- How much potential revenue is lost through cancellations and no-shows?
- Which hotel branches generate the highest revenue?
- Which room types contribute the most to revenue?
- Which booking channels generate the most business?
- How does hotel revenue change throughout the year?

## 3. Dataset Overview

The project uses a synthetic hotel booking dataset containing 7,000 booking records across four hotel branches.

The dataset covers the period from January to December 2023.

It includes information about:

- Hotel branches.
- Booking and check-in dates.
- Check-out dates.
- Booking channels.
- Room types.
- Number of guests.
- Booking status.
- Room prices.
- Customer and reservation details.

The dataset contains five booking channels, four room types, and four booking statuses:

- Checked-out
- Confirmed
- Cancelled
- No-show

The dataset was generated with AI assistance to provide a structured environment for practicing hotel revenue analysis. The results therefore represent patterns within the synthetic dataset, not actual hotel business performance.

## 4. Business Logic and KPI Definition

One of the most important parts of this project was deciding how revenue should be calculated.

Initially, I explored the different booking statuses and considered how each status should affect the revenue calculation.

Instead of treating every booking as earned revenue, I divided revenue into three categories.

### Actual Revenue

Revenue from bookings where guests had completed their stay.

Only checked-out bookings were included in realized revenue.

### Expected Revenue

Revenue from confirmed bookings where guests had not yet completed their stay.

These bookings represented potential future revenue rather than money already earned.

### No Revenue

Cancelled and no-show bookings were classified as revenue that would not be realized.

This distinction became the foundation of the entire analysis because it prevented confirmed bookings from being incorrectly treated as completed revenue.

### Key Performance Indicators

Based on the business requirements, I developed KPIs to measure:

- Total bookings.
- Realized revenue.
- Expected revenue.
- Revenue loss rate.
- Average length of stay.
- Other booking and revenue performance measures.

These metrics provided a more meaningful overview of hotel performance than simply calculating total booking value.

## 5. Data Cleaning and Preparation

Before building the dashboard, I prepared the dataset for analysis.

The raw data contained date columns stored as text, which needed to be converted into proper Excel date values.

I also created calculated columns to support the analysis.

### Feature Engineering

The additional columns included:

**Number of Nights**

Calculated using the difference between check-out and check-in dates.

**Total Guests**

Calculated by combining the number of adults, children, and babies.

**Revenue Amount**

Calculated using the booking's room price and number of nights.

**Revenue Type**

Classified each booking into Actual, Expected, or No Revenue based on its booking status.

These calculated fields made it possible to perform more meaningful analysis using PivotTables.

## 6. Exploratory Analysis Using PivotTables

After preparing the dataset, I created eight PivotTables to investigate different dimensions of hotel performance.

The analysis covered:

### Branch Performance

Compared revenue generated by the four hotel branches to identify the highest- and lowest-performing locations.

### Room Type Analysis

Examined booking volume and revenue contribution across different room types.

### Booking Channel Analysis

Compared booking channels to understand which channels contributed the most bookings and revenue.

### Monthly Revenue Trends

Analyzed revenue across individual months to identify seasonal patterns.

### Booking Status Analysis

Examined the distribution of checked-out, confirmed, cancelled, and no-show bookings.

### Revenue Analysis

Compared realized revenue, expected revenue, and revenue associated with unsuccessful bookings.

The PivotTables provided the summarized data required to build the final dashboard.

## 7. Interactive Dashboard Development

The final dashboard was designed to bring the important business metrics and analytical findings into a single view.

### Dashboard Components

**KPI Cards**

Six KPI cards provide a summarized view of the hotel's booking and revenue performance.

**Charts and Visualizations**

Six charts represent different dimensions of hotel performance, including revenue, booking trends, room types, branches, and booking channels.

**Interactive Slicers**

Two slicers allow users to filter the dashboard by:

- Room Type
- Booking Source

I also connected the slicers to the relevant PivotTables using Excel's Report Connections feature so that the charts could respond together to the selected filters.

The dashboard was designed to make it easier to explore the data without manually navigating through individual PivotTables.

## 8. Key Findings and Business Insights

The analysis revealed several important observations.

### 1. A Large Portion of Revenue Was Still Pending

The dataset contained approximately $5.85 million in total booking value.

However, only $1.83 million was realized revenue from 1,724 checked-out stays.

Another $4.02 million was associated with 3,866 confirmed stays.

This means approximately 69% of the total booking value was still expected rather than realized.

**Business Interpretation:** The hotel should pay attention to converting confirmed reservations into completed stays. Booking value alone does not represent revenue already earned.

### 2. Approximately One in Five Bookings Did Not Generate Revenue

Out of 7,000 bookings, 1,410 were cancelled or resulted in no-shows.

This represented approximately 20.1% of all bookings.

- Cancellation rate: 15.0%.
- No-show rate: 5.2%.

The associated potential room revenue was approximately $1.48 million.

Branch A recorded the highest loss rate at 22%.

**Business Interpretation:** Cancellation and no-show management could be an important area of improvement, particularly for branches experiencing higher booking losses.

### 3. Suites Generated a Disproportionate Share of Revenue

Suites represented approximately 16% of bookings but contributed around 33% of total booking revenue.

They generated approximately $1.91 million from 1,098 bookings.

In comparison, Single rooms generated approximately $1.15 million from 2,430 bookings.

**Business Interpretation:** Higher-value room categories can contribute significantly to overall revenue even when their booking volumes are lower.

### 4. Branch D Outperformed Branch C

Branch D generated approximately $1.80 million, representing 31% of total revenue.

Its average room rate was approximately $226 per night.

Branch C generated approximately $1.23 million, representing 21% of total revenue, with an average room rate of approximately $162.

The difference in average room rate was approximately $64 per night.

**Business Interpretation:** Comparing room rates and booking performance across branches can help management investigate differences in pricing and revenue generation.

### 5. Website Bookings Contributed the Highest Revenue

The website booking channel generated approximately $2.02 million from 2,400 bookings, representing 35% of total revenue.

Online Travel Agencies generated approximately $1.47 million, representing 25%.

Travel agents contributed approximately 11% of total revenue.

**Business Interpretation:** The hotel's direct website channel represented an important source of bookings and revenue.

### 6. Revenue Performance Varied Across Months

December generated approximately $748,000, while January generated approximately $688,000.

Together, these two months contributed approximately 25% of annual revenue.

March recorded the lowest monthly revenue at approximately $364,000.

At a quarterly level, Q4 was the strongest quarter, while Q3 was the weakest.

**Business Interpretation:** Understanding monthly and quarterly revenue variations can help hotels plan seasonal promotions and resource allocation.

## 9. Challenges and Problem-Solving

### Defining Revenue Correctly

One of the main analytical challenges was deciding how different booking statuses should affect revenue calculations.

Treating confirmed bookings as actual revenue would have overstated the hotel's realized performance.

Separating revenue into Actual, Expected, and No Revenue categories provided a more accurate analytical structure.

### Connecting Dashboard Slicers

During the initial dashboard development, I encountered an issue where the slicers were filtering only one PivotTable rather than all the relevant charts.

I investigated the problem and identified that the PivotTables needed to be connected through the Report Connections feature.

After configuring the connections, the slicers were able to control all six charts together.

### KPI and Dashboard Synchronization

One limitation in the current dashboard is that the KPI cards and insight text remain static when the slicers are changed.

The charts respond to the selected filters, but the KPI cards continue to represent the complete dataset.

I identified this as an area for improvement in a future version.

## 10. AI-Assisted Analytical Approach

AI played a supporting role in this project rather than replacing the analytical work.

I primarily used AI as a conversational partner to explore the business problem and reason through analytical decisions.

For example, I discussed:

- Which business questions were worth investigating.
- Which KPIs would provide meaningful information.
- How different booking statuses should affect revenue calculations.
- Which additional calculated columns would be useful.
- How the results could be translated into business observations.

These discussions helped me evaluate different approaches and arrive at my own analytical decisions.

The data preparation, Excel formulas, PivotTables, KPI calculations, dashboard development, and verification of findings were primarily carried out by me.

AI assistance was also used during dataset generation and dashboard layout refinement.

## 11. Key Learning Outcomes

**Business Understanding**

Learned to approach a dataset by first identifying the business problem and determining which metrics could help answer relevant questions.

**KPI Development**

Gained experience defining metrics based on business logic rather than calculating numbers without understanding their purpose.

**Revenue Analysis**

Developed an understanding of the difference between realized revenue, expected revenue, and revenue lost through unsuccessful bookings.

**Excel Data Analysis**

Improved practical experience with calculated columns, Excel formulas, PivotTables, PivotCharts, and slicers.

**Dashboard Development**

Learned how to organize KPIs and visualizations into an interactive dashboard and connect multiple PivotTables through slicers.

**Analytical Thinking**

Practiced moving beyond descriptive numbers to explain what the findings could mean from a business perspective.

## 12. Limitations and Future Improvements

Although the dashboard covers several important aspects of hotel performance, there are opportunities to improve it further.

- Make KPI cards dynamically respond to slicer selections.
- Make the insight panel update based on the selected filters.
- Introduce additional filters for branch and booking status.
- Analyze cancellation patterns based on booking lead time.
- Explore the relationship between room type, booking channel, and revenue loss.
- Rebuild the dashboard in Power BI to compare reporting capabilities.

The dataset is synthetic and covers a single year, so the findings should not be treated as evidence of actual hotel industry trends.

## 13. Conclusion

This project demonstrates how Microsoft Excel can be used to transform hotel booking records into meaningful business information.

The most important part of the project was establishing the correct analytical logic before building the dashboard.

By distinguishing realized revenue from expected revenue and revenue lost through cancellations and no-shows, I was able to develop a more meaningful view of hotel performance.

The project strengthened my understanding of business-oriented data analysis, KPI development, Excel dashboard creation, and communicating findings through data.

It also reinforced an important analytical principle: **calculating a metric is only the beginning; understanding what that metric represents is what makes the analysis valuable.**

---

**Project Repository:** [GitHub – Hotel Booking Revenue Analysis](https://github.com/Adeen0504/Hotel_Booking_Revenue-Excel-Project)

**Tools:** Microsoft Excel · Excel Formulas · Calculated Columns · PivotTables · PivotCharts · Slicers · KPI Development
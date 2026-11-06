/* ===== EDIT YOUR CASE STUDIES HERE =====
   Best way: put a file named NAME.md in the case-studies folder (hotel.md, printdrop.md ...) and the page shows it.
   Case studies are completely separate from your GitHub READMEs. If there is no NAME.md file, the page uses the fields below.
   One entry per project. The page case.html?p=NAME shows it.
   Any field you leave empty ('' or []) is simply hidden, so fill in only what you have.
   q = the question · data = the dataset · steps = what you did · findings = what you found
   next = recommendations · learned = what you learned · tools = tools used · live = deployed website link */
const CASES = {
  hotel: {
    title: 'Hotel Booking & Revenue Dashboard',
    sub: 'An interactive Excel dashboard on hotel bookings and revenue',
    src: 'https://github.com/Adeen0504/Hotel_Booking_Revenue-Excel-Project', live: '',
    q: 'Which branches, room types and booking channels bring in the most revenue, and how much revenue is already earned, still expected or lost?',
    data: 'An AI-generated hotel bookings dataset covering 4 branches and 5 booking channels. I converted the check-in and check-out columns from text to real dates and renamed the Revenue_Nights column.',
    steps: [
      'Defined three revenue types: actual (guests who have checked out), expected (guests yet to check out) and no revenue (lost bookings).',
      'Built a KPI sheet with formulas on the raw data.',
      'Built the pivot tables and kept the 6 charts that tell the story on the Dashboard sheet, dropping the extra ones.',
      'Added slicers for room type, revenue type and booking source so the dashboard can be filtered.'],
    findings: [],   /* add 3 real findings from your dashboard, for example the top branch and the share of lost revenue */
    next: [],
    learned: [
      'Slicers only filter the pivot tables they are connected to.',
      'KPI cells built with formulas on raw data do not react to slicers, so the dashboard has to be designed around that.'],
    tools: ['Excel', 'Pivot tables', 'Slicers', 'Charts', 'Formulas']
  },
  instagram: {
    title: 'Instagram_EDA',
    sub: 'Exploring my own Instagram data',
    src: 'https://github.com/Adeen0504/INSTAGRAM_EDA', live: '',
    q: "Who do I follow, what am I into, and what do I actually scroll?",
    data: 'My own liked-posts export from Instagram.',
    steps: [], findings: [], next: [], learned: [],
    tools: ['EDA', 'Data cleaning']
  },
  flood: {
    title: 'Flood Impact on Agriculture & Economy',
    sub: 'Predicting how floods affect agriculture and the economy',
    src: 'https://github.com/Adeen0504/Predicting-Flood-Impact-On-Agriculture-And-Economy', live: '',
    q: 'How do floods affect agriculture and the economy, and can the impact be predicted?',
    data: '', steps: [], findings: [], next: [], learned: [],
    tools: ['Prediction', 'Data science']
  },
  printdrop: {
    title: 'PrintDrop',
    sub: 'A web app I designed and built with AI assistance',
    src: 'https://github.com/Adeen0504/PrintDrop', live: '',
    q: '', data: '',
    steps: [
      'Wrote down every feature and how the site should look.',
      'Gave that to an AI assistant to write the code, then tested each feature and listed what to change.',
      'Ran the app in VS Code, reported the errors for the AI to fix, and pushed the project to GitHub.'],
    findings: [], next: [], learned: [], tools: []
  },
  openshelf: {
    title: 'OpenShelf',
    sub: 'A web app I designed and built with AI assistance',
    src: 'https://github.com/Adeen0504/OpenShelf', live: '',
    q: '', data: '',
    steps: [
      'Wrote down every feature and how the site should look.',
      'Gave that to an AI assistant to write the code, then tested each feature and listed what to change.',
      'Ran the app in VS Code, reported the errors for the AI to fix, and pushed the project to GitHub.'],
    findings: [], next: [], learned: [], tools: []
  },
  eduvault: {
    title: 'EduVault',
    sub: 'A digital library system for schools, built with AI assistance',
    src: 'https://github.com/Adeen0504/EduVault-School-Digital-Library-System-v1-', live: '',
    q: '', data: '',
    steps: [
      'Wrote down every feature and how the site should look.',
      'Gave that to an AI assistant to write the code, then tested each feature and listed what to change.',
      'Ran the app in VS Code, reported the errors for the AI to fix, and pushed the project to GitHub.'],
    findings: [], next: [], learned: [], tools: []
  },
    'ecommerce-sales-delivery': {
    title: 'E-commerce Sales & Delivery Dashboard',
    sub: 'Excel dashboard on 500 online orders',
    src: 'https://github.com/Adeen0504/excel-sales-delivery-dashboard', live: '',
    q: 'How much did the store sell, and how much did discounts and delivery charges change the total?',
    data: '500 orders with customer details, product IDs, price, quantity, coupon codes and delivery dates (synthetic data).',
    steps: [], findings: [], next: [], learned: [], tools: ['Excel'],
    md: 'case-studies/ecommerce-sales-delivery.md' 
  },
    'road-accident': {
    title: 'Road Accident Analysis',
    sub: 'A Python analysis of 12,316 road accidents',
    src: 'https://github.com/Adeen0504/road-accident-analysis', live: '',
    q: 'Do accidents differ by time of day? Do new and experienced drivers crash differently? How do wet roads change the picture?',
    data: '12,316 rows and 32 columns covering driver details, vehicle types, road conditions, weather, and casualty severity.',
    steps: [], findings: [], next: [], learned: [], tools: ['Python', 'pandas'],
    md: 'case-studies/road-accident.md'
  }
};

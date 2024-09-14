var birthChartAnalysisImage="<img src='birthChartAnalysisImage.png'>"
var birthChartAnalysisContent=`We analyzes a birth chart (also known as a Kundali or horoscope) to gain insights into an individual's life path, personality, strengths, weaknesses, and potential challenges. Here's what they typically do in a birth chart analysis:<br /><br /><br /> \
  <b><u>Chart Calculation:</u></b><br /> \
  We use individual's birth date, time, and place to calculate the precise positions of the planets and other celestial bodies at the time of their birth. This information is used to create the birth chart, which is a visual representation of the celestial positions.<br /><br /> \
  <b><u>Chart Interpretation:</u></b><br /> \
  We analyzes the placement of the planets in the 12 houses (bhavas) and 12 zodiac signs (rashis) of the birth chart. We consider the aspects (relationships) between the planets, the strength of each planet, and the presence of any special planetary combinations (yogas). This analysis helps  understand the individual's inherent qualities, tendencies, and life experiences. <br /><br /> \
  <b><u>Predictions and Guidance:</b></u><br /> \
  Based on the chart analysis, the Jyotish can make predictions about various aspects of the individual's life, such as: Career and finances, Relationships and marriage, Health and well-being, Education and spiritual growth. <br /><br /><br /> \
  Overall, we use birth chart analysis to provide a deeper understanding of an individual's life purpose and potential, empowering them to make informed choices and navigate life's challenges with greater clarity and confidence.`

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openNavServices(image, title, content) {
  document.getElementById("myNavServices").style.width = "100%";
  
  document.getElementById("overlayServices-image").innerHTML = image;
  document.getElementById("overlayServices-title").innerHTML = title;
  document.getElementById("overlayServices-content").innerHTML = content;

}

function closeNavServices() {
  document.getElementById("myNavServices").style.width = "0%";
}

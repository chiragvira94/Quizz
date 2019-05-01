$(document).ready(function(){
	document.getElementById('timer').innerHTML =10 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
});
setTimeout(TimeOutQuiz,600000);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

$(".review_button").click(function(){
	$(this).parent().addClass("review_question");
});

$("#questions_for_review").click(function(){
	$(".mySlides").hide();
	$(".review_question").show();
});

var values = [];

var count=0;
function submitQuiz()	
{
	alert(values);
	//alert("Hello");
	
	var Answer=[];
	var i;
	for(i=0;i<10;i++)
	{
		Answer[i]="Wrong";
		//alert(Answer[i]);
	}
	
		if ($('input[name=question1]:checked').val() )
		{
	Answer[0]= document.querySelector('input[name = question1]:checked').value;
		}
	//alert(Answer[0]);
	
	
	var User_ans_question2=document.getElementById("user_ans_question2").value;
	
	var lowercaseUserAns = User_ans_question2.toLowerCase();
	if(lowercaseUserAns == 'this')
	{
		Answer[1]="right";
	}
	else
	{
		Answer[1]="Wrong";
	}
	//alert(Answer[1]);
	
	
		if ($('input[name=question3]:checked').val() )
		{
	Answer[2]= document.querySelector('input[name = question3]:checked').value;
		}
	//alert(Answer[2]);
	
	
		if ($('input[name=question4]:checked').val() )
		{
	Answer[3]= document.querySelector('input[name = question4]:checked').value;
		}
	//alert(Answer[3]);
	
	
		if ($('input[name=question5]:checked').val() )
		{
	Answer[4]= document.querySelector('input[name = question5]:checked').value;
		}
	//alert(Answer[4]);
	
	
		if ($('input[name=question6]:checked').val() )
		{
	Answer[5]= document.querySelector('input[name = question6]:checked').value;
		}
	//alert(Answer[5]);
	
	
		if ($('input[name=question7]:checked').val() )
		{
	Answer[6]= document.querySelector('input[name = question7]:checked').value;
		}
	//alert(Answer[6]);
	
	
		if ($('input[name=question8]:checked').val() )
		{
	Answer[7]= document.querySelector('input[name = question8]:checked').value;
		}
	//alert(Answer[7]);
	
	
	var User_ans_question9=document.getElementById("user_ans_question9").value;
	var lowercaseUserAns9= User_ans_question9.toLowerCase();
	if(lowercaseUserAns9 == 'final')
	{
		Answer[8]="right";
	}
	else
	{
		Answer[8]="Wrong";
	}
	//alert(Answer[8]);
	
	
		if ($('input[name=question10]:checked').val() )
		{
	Answer[9]= document.querySelector('input[name = question10]:checked').value;
		}
	//alert(Answer[9]);
	
	for( i=0;i<10;i++)
	{
		if(Answer[i] == 'right')
		{
			count=count+1;
		}
	}
	alert("Your Final Score is : - "+count);
	
	//disabling the radio button and the text box
	disable();
	
	//hidig the quiz and showing the result
	$("#QuizSection").hide("slow");
	$("#ResultSection").show();
	$("#Timer").hide();
	$("#SubmitBtn").hide();
	$("#AbortBtn").hide();
	$("#ReviewBtn").hide();
	
	result(count);
	
	
	
}

function abortQuiz(){
	submitQuiz();
	$("#Note").text("You Quit");
	
}
function Answer1()
{
	$("#0").show();
	
	var d1 = document.getElementsByName('question1');
		for (var i = 0; i< d1.length;  i++){
			d1[i].disabled = true;
		}
	
}function Answer2()
{
	$("#1").show();
	document.getElementById("user_ans_question2").disabled = true;
	
}function Answer3()
{
	$("#2").show();
	var d3 = document.getElementsByName('question3');
		for (var i = 0; i< d3.length;  i++){
			d3[i].disabled = true;
		}
	
}function Answer4()
{
	$("#3").show();
	var d4 = document.getElementsByName('question4');
		for (var i = 0; i< d4.length;  i++){
			d4[i].disabled = true;
		}
	
}function Answer5()
{
	$("#4").show();
	var d5 = document.getElementsByName('question5');
		for (var i = 0; i< d5.length;  i++){
			d5[i].disabled = true;
		}
	
}function Answer6()
{
	$("#5").show();
	var d6 = document.getElementsByName('question6');
		for (var i = 0; i< d6.length;  i++){
			d6[i].disabled = true;
		}
	
}function Answer7()
{
	$("#6").show();
	var d7 = document.getElementsByName('question7');
		for (var i = 0; i< d7.length;  i++){
			d7[i].disabled = true;
		}
	
}function Answer8()
{
	$("#7").show();
	var d8 = document.getElementsByName('question8');
		for (var i = 0; i< d8.length;  i++){
			d8[i].disabled = true;
		}
	
}function Answer9()
{
	$("#8").show();
	document.getElementById("user_ans_question9").disabled = true;
	
}function Answer10()
{
	$("#9").show();
	var d10 = document.getElementsByName('question10');
		for (var i = 0; i< d10.length;  i++){
			d10[i].disabled = true;
		}
	
}


function TimeOutQuiz(){
	submitQuiz();
	$("#Note").text("Unfortunately, Time Out....");
	
}


function disable(){
	var d1 = document.getElementsByName('question1');
		for (var i = 0; i< d1.length;  i++){
			d1[i].disabled = true;
		}
		
	document.getElementById("user_ans_question2").disabled = true;
	var d3 = document.getElementsByName('question3');
		for (var i = 0; i< d3.length;  i++){
			d3[i].disabled = true;
		}
	var d4 = document.getElementsByName('question4');
		for (var i = 0; i< d4.length;  i++){
			d4[i].disabled = true;
		}
	var d5 = document.getElementsByName('question5');
		for (var i = 0; i< d5.length;  i++){
			d5[i].disabled = true;
		}
	var d6 = document.getElementsByName('question6');
		for (var i = 0; i< d6.length;  i++){
			d6[i].disabled = true;
		}
	var d7 = document.getElementsByName('question7');
		for (var i = 0; i< d7.length;  i++){
			d7[i].disabled = true;
		}
	var d8 = document.getElementsByName('question8');
		for (var i = 0; i< d8.length;  i++){
			d8[i].disabled = true;
		}
		
	document.getElementById("user_ans_question9").disabled = true;
	var d10 = document.getElementsByName('question10');
		for (var i = 0; i< d10.length;  i++){
			d10[i].disabled = true;
		}

}

function result(count){
	
	if (count >=8)
	{
		$("#Note").text("Great Work, CONGRATULATION...:)");
	}
	else if(count >=5)
	{
		$("#Note").text("Not So Bad...");
	}
	else if(count >=3)
	{
		$("#Note").text("Bad Performance");
	}
	else 
	{
		$("#Note").text("Sorry, You Are Failed");
	}
		
	$("#Result").text("You Scored "+count+"/10");
	
}


function Review1() {
 values[1]="Question 1 Set for review \n";	
 alert(values[1]);
}
function Review2() {
 values[2]="Question 2 Set for review \n";	
 alert(values[2]);
}
function Review3() {
 values[3]="Question 3 Set for review \n";	
 alert(values[3]);
}
function Review4() {
 values[4]="Question 4 Set for review \n";	
 alert(values[4]);
}
function Review5() {
 values[5]="Question 5 Set for review \n";	
 alert(values[5]);
}
function Review6() {
 values[6]="Question 6 Set for review \n";	
 alert(values[6]);
}
function Review7() {
 values[7]="Question 7 Set for review \n";	
 alert(values[7]);
}
function Review8() {
 values[8]="Question 8 Set for review \n";	
 alert(values[8]);
}
function Review9() {
 values[9]="Question 9 Set for review \n";	
 alert(values[9]);
}
function Review10() {
 values[10]="Question 10 Set for review \n";	
 alert(values[10]);
}

function Review(){
	alert(values);
}
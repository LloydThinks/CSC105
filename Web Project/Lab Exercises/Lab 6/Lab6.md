## CSC 105 Lab 6: HTML

### Lab 6 Topics

1. Basic HTML (tags)
	* Body, Head
	* Title
	* img, iFrame (media)
	* a
	* h1
	* div, span
2. Tables
	* thead
	* tbody
	* tr
	* td

### Goal

The goal of today's lab exercise is to introduce you to Web Development. There are three primary languages that are used on the web, and serve as the basis for most (if not all) websites: HTML, CSS, and JavaScript. We will be learning about HTML and the different tags that it has to begin our website. Over the course of the next three labs we will be building a webpage that mimicks the final product we produced in Excel. Here is a screen shot of the final product after all three labs:

<div style="text-align:center">
    <img src="img/final_product.png"/>
</div>


### Deliverable

By the end of the lab show the instructor a completed webpage with appropriate sample data, the result should be similar to: 

<div style="text-align:center">
    <img src="img/lab1_product.png" width=600/>
</div>

Your webpage should meet the following criteria, future week's labs will depend on this deliverable:

1. Have all of the following tags incorporated somewhere in the webpage:
	* Basic HTML (tags)
		* Body, Head
		* Title
		* img, iFrame (media)
		* a
		* h1
		* div, span
	* Tables
		* thead
		* tbody
		* tr
		* td
2. Enter at least two clients into table, more is better

### Concepts
The following discusses the key concepts required to complete the exercise described above. If you are familiar with these concepts feel free to skip to the exercise. 

#### HTML
HTML stands for "Hyper Text Markup Language," and is the first of three languages developed to share information on the world wide web. By "language" we mean programming language. The main purpose of HTML is to simply serve up information, and provide structure to the webpage. If we imagine a fully functioning webpage to be a person, then HTML is the skeleton of the person. HTML defines where content will go, as well as a rough outline of what the page will look like when it is done. Unfortunately, we won't see nice formatting until next week's lab where we learn about CSS.

#### Tags
HTML can be thought of as a two basic things: content (which comes in text form), and tags. The tags allow for structure to be imposed on the page, through invisible boxes that contain the aforementioned content. For example, here we see the \<div> tag creating a box around "Content":

	<div>
		Content
	</div>

It is important to note, that tags do not display once the webpage is rendered. In other words, if we were to created an HTML file with the above code, and open it in our web browser, we would only see "Content" and not the \<div> tags.



### Exercise 
The following describes steps to guide you through the exercise to create an HTML page.

#### 1) Open a Text Editing Program



<div style="text-align:center">
    <img src="img/lab1_step-1.png" width=600 />
</div>

#### 2) Sample Data

* Enter sample data into the appropriate cells: Date, Hours, Project Name, Client Name, and Rate, and Description cells.

<div style="text-align:center">
    <img src="img/lab1_step-2.png" width=600 />
</div>

#### 3) Compute Amount

* Use a formula to compute the amount owed based on the hourly rate and number of hours worked.

<div style="text-align:center">
    <img src="img/lab1_step-3.png" width=600 />
</div>

*HINT: Click and drag or double-click the "handle" at the bottom of selected cell to apply the formula to nearby cells. [Demo GIF 1](http://pakaccountants.com/wp-content/uploads/2014/10/abc-2.gif), [Demo GIF 2](http://i1.wp.com/bradedgar.com/wp-content/uploads/2014/08/Relative_Referencing_Gif.gif?resize=1050%2C320)*

#### 4) Format Numbers

* Use the number formatting tools (see formatting section above) to adjust the number of decimal points in the hours, rate, and amounts column to two demical places. e.g. `2.00` 

#### 5) Remaining Formatting

* Format the rest of the sheet as you see fit. Try out: 
    * Cell colors
    * Cell borders
    * Font face
    * Font size

#### 6) Submit

* Show your lab instructor your working spreadsheet. 
* Save the workbook for next week. 
    * **Do not save your work on the lab computer's hard drive.** It will be deleted by the system. 

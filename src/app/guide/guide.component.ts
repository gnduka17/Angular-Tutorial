import { Component, OnInit } from "@angular/core";
import { GuideStatesService } from "../guide-states.service";

@Component({
  selector: "app-guide",
  templateUrl: "./guide.component.html",
  styleUrls: ["./guide.component.css"]
})
export class GuideComponent implements OnInit {
  currentStep = 0;
  content = [
    // INTRO
    "<h2><strong>Part 1: Getting Started With a Basic Angular App</strong></h2><hr> \
  <ul> \
  <li> <p> You are now staring at an online IDE called Stackblitz. You can  create Angular and React projects that are immediately online & shareable via link in just one click.</p></li> \
  <li> <p>This pane, on the right, shows the starting state of the sample Angular app. It defines a frame with a top bar ...containing the store name and checkout icon...and the title for a product list which will be populated and dynamically updated with data from the application).</p> </li> \
  <li> <p>The project pane on the left is where you will be coding. It shows the source files that make up the application, including all of the infrastructure and configuration files. The currently selected file shows up in the editor pane in the middle.</p> </li> \
	<li> <p>Before going into the source structure, the next section shows how to fill out the HTML <em>template</em> for the product list, using the provided sample data. This should give you an idea how easy it is to modify and update the page dynamically.</p> </li> \
  </ul>",

    // STACKBLITZ TIPS
    "<div> \
	<h2><strong>StackBlitz tips</strong></h2> <hr> \
	<ul> \
		<li> \
    <p>Log into StackBlitz so you can save and resume your work. \
				If you have a GitHub account, you can log into StackBlitz \
				with that account. In order to save your progress, first \
				fork the project using the Fork button at the top left, \
				then you'll be able to save your work to your own StackBlitz \
				account by clicking the Save button.</p> \
		</li> \
		<li> \
			<p>To copy a code example from this tutorial, click the icon \
				at the top right of the code example box, and then paste the \
				code snippet from the clipboard into StackBlitz.</p> \
		</li> \
		<li> \
			<p>If the StackBlitz preview pane isn't showing what you \
				expect, save and then click the refresh button.</p> \
		</li> \
		<li> \
			<p>StackBlitz is continually improving, so there may be \
				slight differences in generated code, but the app's \
				behavior will be the same.</p> \
		</li> \
		<li> \
			<p>When you generate the StackBlitz example apps that \
				accompany the tutorials, StackBlitz creates the starter \
				files and mock data for you. The files you'll use throughout \
				the tutorials are in the <code>src</code> folder of the StackBlitz \
        example apps.</p> \
		</li> \
	</ul> \
</div>",

    // TEMPLATE SYNTAX
    '<h2><strong>Template syntax</strong></h2> <hr> \
<p>Angular\'s template syntax extends HTML and JavaScript. \
  This section introduces template syntax by enhancing the "Products" area. \
</p> \
<p>To help you get going, the following steps use predefined product data from the \
	<em><strong>products.ts</strong></em> file \
	(already created in StackBlitz example) and methods from the <em><strong>product-list.component.ts</strong></em> \
	file. \
</p>',
    // STEP 1
    "<p>In the <em><strong>product-list</strong></em> folder, open the template file <em><strong>product-list.component.html</strong></em>.</p>",
    // STEP 2
    '<p>Modify the product list template to display a list of product names.</p> \
<ol> \
	<li> \
		<p>Each product in the list displays the same way, one after another on the page. To iterate over the predefined \
			list of products, put the *ngFor directive on a &lt;div&gt;, as follows:  \
		<p>With *ngFor, the &lt;div&gt; repeats for each product in the list.</p> \
		<div> \
			<p><code>*<a href="api/common/NgForOf" class="code-anchor">ngFor</a></code> is a "structural directive".\
				Structural directives shape or reshape the DOM\'s structure, typically by adding, removing, and\
				manipulating the elements to which they are attached. Directives with an asterisk, <code>*</code>, are\
				structural directives.</p>\
		</div>\
	</li>\
	<li>\
		<p>To display the names of the products, use the interpolation syntax <code>{{ }}</code>. Interpolation renders\
			a property\'s value as text. Inside the <code>&lt;div&gt;</code>, add an <code>&lt;h3&gt;</code> to display\
			the interpolation of the product\'s name property:</p>\
		<p>The preview pane immediately updates to display the name of each product in the list.</p>\
	</li>\
</ol>',
// STEP 3
"<li>\
	<p>To make each product name a link to product details, add the <code>&lt;a&gt;</code> element and set its title to\
		be the product's name by using the property binding <code>[ ]</code> syntax, as follows:</p>\
	<p>In the preview pane, hold the pointer over a product\
		name to see the bound name property value, which is\
		the product name plus the word \"details\".\
		Interpolation <code>{{ }}</code> lets you render the\
		property value as text; property binding <code>[ ]</code> lets you\
		use the property value in a template expression.</p>\
</li>",
// STEP 4
"<li>\
	<p>Add the product descriptions. On the <code>&lt;p&gt;</code> element, use an\
		<code>*<a href=\"api/common/NgIf\" class=\"code-anchor\">ngIf</a></code> directive so that Angular only creates the\
		<code>&lt;p&gt;</code> element if the current product has a description.</p>\
	<p>The app now displays the name and description of each product in the list. Notice that the final product does not\
		have a description paragraph. Because the product's description property is empty, Angular doesn't create the\
		<code>&lt;p&gt;</code> element—including the word \"Description\".</p>\
</li>",
// STEP 5
"",
  ];

  constructor(public guideStates: GuideStatesService) {}

  ngOnInit() {
    // window.scroll(0, 0);
  }
  //   onActivate(event) {
  //     window.scroll(0,0);
  //     //or document.body.scrollTop = 0;
  //     //or document.querySelector('body').scrollTo(0,0)
  // }
}

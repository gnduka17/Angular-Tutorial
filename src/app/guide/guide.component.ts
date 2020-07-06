import { Component, OnInit, ElementRef, ViewChild, } from "@angular/core";
import { GuideStatesService } from "../guide-states.service";
import { Clipboard } from "@angular/cdk/clipboard"
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-guide",
  templateUrl: "./guide.component.html",
  styleUrls: ["./guide.component.css"]
})
export class GuideComponent implements OnInit {
  @ViewChild('autoScrollDiv') autoScrollDiv: ElementRef;

  currentStep = 0;
  backPage(){
    this.currentStep = this.currentStep-1;
    this.autoScrollDiv.nativeElement.scrollTop = 0;
  }
  nextPage(){
    this.currentStep = this.currentStep+1;
    this.autoScrollDiv.nativeElement.scrollTop = 0;
  }
  content = [
    // ~~~~~~ PART 1 INTRO ~~~~~~
  `<h1 class="titleH">Part 1: Getting Started With a Basic Angular App</h1><hr>
  <pre>
    <code>
        My pre-formatted "quoted" code here.
        <div></div>
    </code>
  </pre>
  <p class="guideText"> You are now staring at an online IDE called Stackblitz. You can  create Angular and React projects that are immediately online & shareable via link in just one click.</p>`,


  "<p class = \"guideText\">This pane, on the right, shows the starting state of the sample Angular app. It defines a frame with a top bar(containing the store name and checkout icon and the title for a product list which will be populated and dynamically updated with data from the application).</p>",
  "<p class = \"guideText\">The project pane on the left is where you will be coding. It shows the source files that make up the application, including all of the infrastructure and configuration files. The currently selected file shows up in the editor pane in the middle.</p>",
	// "<p class = \"guideText\">The next section will show you how to fill out the HTML <em>template</em> for the product list, using the provided sample data. This should give you an idea how easy it is to modify and update the page dynamically.</p>",

    // STACKBLITZ TIPS
	"<h2>StackBlitz tips</h2> <hr> \
    <p class = \"guideText\">You can log into StackBlitz to save and resume your work. \
				If you have a GitHub account, you can log into StackBlitz \
				with that account.<br><br> In order to save your progress, first \
				fork the project using the Fork button at the top left, \
				then you'll be able to save your work to your own StackBlitz \
				account by clicking the Save button.</p>",
			// "<h1>StackBlitz tips</h1> <hr> <p class = \"guideText\">To copy a code example from this tutorial, click the icon \
			// 	at the top right of the code example box, and then paste the \
			// 	code snippet from the clipboard into StackBlitz.</p>",
			"<h2>StackBlitz tips</h2> <hr> <p class = \"guideText\">If the StackBlitz preview pane isn't showing what you \
				expect, save and then click the refresh button.</p> \
			<p class = \"guideText\">StackBlitz is continually improving, so there may be \
				slight differences in generated code, but the app's \
				behavior will be the same.</p>",
			"<h2>StackBlitz tips</h2> <hr> <p class = \"guideText\">When you generate the StackBlitz example apps that \
				accompany the tutorials, StackBlitz creates the starter \
				files and mock data for you. The files you'll use throughout \
				the tutorials are in the <code>src</code> folder of the StackBlitz \
        example apps.</p>",

    // TEMPLATE SYNTAX...STEP 1
    '<h2><strong>Now Let\'s Get To It!</strong></h2> <hr> \
    <p class = \"guideText\"> <em><strong>STEP 1:</strong></em> In the <em><strong>product-list</strong></em> folder, open the template file <em><strong>product-list.component.html</strong></em>.</p>',
    // STEP 2
    '<p class = \"guideText\"> <em><strong>STEP 2:</strong></em> Modify the product list template to display a list of product names.</p> \
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
" <p class = \"guideText\"><em><strong>STEP 3:</strong></em> To make each product name a link to product details, add the <code>&lt;a&gt;</code> element and set its title to\
		be the product's name by using the property binding <code>[ ]</code> syntax, as follows:</p>\
	<p>In the preview pane, hold the pointer over a product\
		name to see the bound name property value, which is\
		the product name plus the word \"details\".\
		Interpolation <code>{{ }}</code> lets you render the\
		property value as text; property binding <code>[ ]</code> lets you\
		use the property value in a template expression.</p>",
// STEP 4
"<p class = \"guideText\"> <em><strong>STEP 4:</strong></em> Add the product descriptions. On the <code>&lt;p&gt;</code> element, use an\
		<code>*<a href=\"api/common/NgIf\" class=\"code-anchor\">ngIf</a></code> directive so that Angular only creates the\
		<code>&lt;p&gt;</code> element if the current product has a description.</p>\
	<p>The app now displays the name and description of each product in the list. Notice that the final product does not\
		have a description paragraph. Because the product's description property is empty, Angular doesn't create the\
		<code>&lt;p&gt;</code> element—including the word \"Description\".</p>",
// STEP 5
"<p class = \"guideText\"> <em><strong>STEP 5:</strong></em>. Add a button so users can share a product with friends. Bind the button's <code>click</code> event to the\
		<code>share()</code> method (in <code>product-list.component.ts</code>). Event binding uses a set of\
		parentheses, <code>( )</code>, around the event, as in the following <code>&lt;button&gt;</code> element:</p>\
	<p>Each product now has a \"Share\" button:</p>\
	<p>Test the \"Share\" button:</p>",
// CONCLUDE TEMPLATE SYNTAX
"<p class = \"guideText\">The app now has a product list and sharing feature.\
	In the process, you've learned to use five common features of Angular's template syntax:</p>\
<ul>\
	<li>*ngFor</li>\
	<li>*ngIf</li>\
	<li>Interpolation <code>{{ }}</code></li>\
	<li>Property binding <code>[ ]</code></li>\
	<li>Event binding <code>( )</code></li>\
</ul>",
// COMPONENTS INTRO
"<h2>Components</h2>\
<p><em>Components</em> define areas of responsibility in the user interface, or UI,\
	that let you reuse sets of UI functionality.\
	You've already built one with the product list component.</p>",
// PART 2 COMPONENT
"<p>A component consists of three things:</p>\
<ul>\
	<li><strong>A component class</strong> that handles data and functionality. In the previous section, the product\
		data and the <code>share()</code> method in the component class handle data and functionality, respectively.\
	</li>\
	<li><strong>An HTML template</strong> that determines the UI. In the previous section, the product list's HTML\
		template displays the name, description, and a \"Share\" button for each product.</li>\
	<li><strong>Component-specific styles</strong> that define the look and feel.\
		Though product list does not define any styles, this is where component CSS\
		resides.</li>\
</ul>\
<p>An Angular application comprises a tree of components, in which each Angular component has a specific purpose and\
	responsibility.</p>",
// PART 3 COMPONENT
"<p>Currently, the example app has three components:</p>\
<ul>\
	<li><code>app-root</code> (orange box) is the application shell. This is the first component to load and the parent\
		of all other components. You can think of it as the base page.</li>\
	<li><code>app-top-bar</code> (blue background) is the store name and checkout button.</li>\
	<li><code>app-product-list</code> (purple box) is the product list that you modified in the previous section.</li>\
</ul>",
// CONCLUDE COMPONENT
"<p>The next section expands the app's capabilities by adding a new component—a product alert—as a child of the product\
	list component.</p>\
<div>\
	<p>For more information about components and how they interact with templates, see <a\
			href=\"guide/architecture-components\"\
			title=\"Concepts > Introduction to Components and Templates\">Introduction to Components</a>.</p>\
</div>",
// INPUT INTRO
"<h2>Input</h2>\
<p>Currently, the product list displays the name and description of each product.\
	The product list component also defines a <code>products</code> property that contains imported data for each\
	product from the <code>products</code> array in <code>products.ts</code>.</p>\
<p>The next step is to create a new alert feature that takes a product as an input. The alert checks the product's\
	price, and, if the price is greater than $700, displays a \"Notify Me\" button that lets users sign up for\
	notifications when the product goes on sale.</p>",
// STEP 1
"	<li>\
		<p>Create a new product alerts component.</p>\
		<ol>\
			<li>\
				<p>Right click on the <code>app</code> folder and use the <code>Angular Generator</code> to generate a\
					new component named <code>product-alerts</code>.</p>\
				<div class=\"lightbox\">\
					<img src=\"generated/images/guide/start/generate-component.png\" alt=\"StackBlitz command to generate component\" width=\"407\" height=\"368\">\
        </div>\
				<p>The generator creates starter files for all three parts of the component:</p>\
					<ul>\
						<li><code>product-alerts.component.ts</code></li>\
						<li><code>product-alerts.component.html</code></li>\
						<li><code>product-alerts.component.css</code></li>\
					</ul>\
			</li>\
		</ol>\
	</li>",
// STEP 2
"	<li>\
		<p>Open <code>product-alerts.component.ts</code>.</p>\
		<ol>\
			<li>\
				<p>Notice the <code>@<a href=\"api/core/Component\" class=\"code-anchor\">Component</a>()</code> decorator.\
					This indicates that the following class is a component. It provides metadata about the component,\
					including its selector, templates, and styles.</p>\
				<ul>\
					<li>\
						<p>The <code>selector</code> identifies the component. The selector is the name you give the\
							Angular component when it is rendered as an HTML element on the page. By convention, Angular\
							component selectors begin with the prefix <code>app-</code>, followed by the component name.\
						</p>\
					</li>\
					<li>\
						<p>The template and style filenames reference the HTML and CSS files that StackBlitz generates.\
						</p>\
					</li>\
				</ul>\
			</li>\
			<li>\
				<p>The component definition also exports the class, <code>ProductAlertsComponent</code>, which handles\
					functionality for the component.</p>\
			</li>\
		</ol>\
	</li>",
// STEP 3
"	<li>\
		<p>Set up the new product alerts component to receive a product as input:</p>\
		<ol>\
			<li>\
				<p>Import <code><a href=\"api/core/Input\" class=\"code-anchor\">Input</a></code> from\
					<code>@angular/core</code>.</p>\
			</li>\
			<li>\
				<p>In the <code>ProductAlertsComponent</code> class definition, define a property named\
					<code>product</code> with an <code>@<a href=\"api/core/Input\" class=\"code-anchor\">Input</a>()</code>\
					decorator. The <code>@<a href=\"api/core/Input\" class=\"code-anchor\">Input</a>()</code> decorator\
					indicates that the property value passes in from the component's parent, the product list component.\
				</p>\
			</li>\
		</ol>\
	</li>",
// STEP 4
"<li>\
		<p>Define the view for the new product alert component.</p>\
		<ol>\
			<li>Open the <code>product-alerts.component.html</code> template and replace the placeholder paragraph with\
				a \"Notify Me\" button that appears if the product price is over $700.</li>\
		</ol>\
	</li>",
// STEP 5
"	<li>\
		<p>Display the new product alert component as a child of the product list.</p>\
		<ol>\
			<li>\
				<p>Open <code>product-list.component.html</code>.</p>\
			</li>\
			<li>\
				<p>To include the new component, use its selector, <code>app-product-alerts</code>, as you would an HTML\
					element.</p>\
			</li>\
			<li>\
				<p>Pass the current product as input to the component using property binding.</p>\
			</li>\
		</ol>\
	</li>",
// CONCLUDE INPUT
  "<p>The new product alert component takes a product as input from the product list. With that input, it shows or hides\
	the \"Notify Me\" button, based on the price of the product. The Phone XL price is over $700, so the \"Notify Me\"\
	button appears on that product.</p>\
<div class=\"lightbox\">\
	<img src=\"generated/images/guide/start/product-alert-button.png\" alt=\"Product alert button added to products over $700\" width=\"259\" height=\"406\">\
</div>\
	<div>\
		<p>See <a href=\"guide/component-interaction\"\
				title=\"Components &amp; Templates > Component Interaction\">Component Interaction</a> for more\
			information about passing data from a parent to child component, intercepting and acting upon a value from\
			the parent, and detecting and acting on changes to input property values.</p>\
	</div>",
// OUTPUT INTRO
"<h2>Output</h2>\
<p>To make the \"Notify Me\" button work, you need to configure two things:</p>\
<ul>\
	<li>the product alert component to emit an event when the user clicks \"Notify Me\"</li>\
	<li>the product list component to act on that event</li>\
</ul>",
// STEP 1
"<li>\
		<p>Open <code>product-alerts.component.ts</code>.</p>\
	</li>",
// STEP 2
"<li>\
		<p>Import <code><a href=\"api/core/Output\" class=\"code-anchor\">Output</a></code> and\
			<code><a href=\"api/core/EventEmitter\" class=\"code-anchor\">EventEmitter</a></code> from\
			<code>@angular/core</code>:</p>\
	</li>",
// STEP 3
"<li>\
		<p>In the component class, define a property named <code>notify</code> with an\
			<code>@<a href=\"api/core/Output\" class=\"code-anchor\">Output</a>()</code> decorator and an instance of\
			<code><a href=\"api/core/EventEmitter\" class=\"code-anchor\">EventEmitter</a>()</code>. This allows the product\
			alert component to emit an event when the value of the notify property changes.</p>\
	</li>",
//ALERT
"<div>\
	<p> When the Angular CLI generates a new component, it includes an empty constructor, the\
		<code><a href=\"api/core/OnInit\" class=\"code-anchor\">OnInit</a></code> interface, and the <code>ngOnInit()</code>\
		method.\
		Since the following example isn't using them, they are omitted here for brevity.</p>\
</div>",
// STEP 4
"<li>\
		<p>In the product alert template, <code>product-alerts.component.html</code>, update the \"Notify Me\" button with\
			an event binding to call the <code>notify.emit()</code> method.</p>\
	</li>",
// STEP 5
"	<li>\
		<p>Next, define the behavior that should happen when the user clicks the button. Recall that it's the parent,\
			product list component—not the product alerts component—that acts when the child raises the event. In\
			<code>product-list.component.ts</code>, define an <code>onNotify()</code> method, similar to the\
			<code>share()</code> method:</p>\
	</li>",
// STEP 6
"<li>\
		<p>Finally, update the product list component to receive output from the product alerts component.</p>\
		<p>In <code>product-list.component.html</code>, bind the <code>app-product-alerts</code> component (which is\
			what displays the \"Notify Me\" button) to the <code>onNotify()</code> method of the product list component.\
		</p>\
	</li>",
// STEP 7
"	<li>\
		<p>Try the \"Notify Me\" button:</p>\
		<div class=\"lightbox\">\
			<img src=\"generated/images/guide/start/product-alert-notification.png\" alt=\"Product alert notification confirmation dialog\" width=\"329\" height=\"104\">\
    </div>\
	</li>",

//ALERT
"<p>See <a href=\"guide/component-interaction\" title=\"Components &amp; Templates > Component Interaction\">Component\
			Interaction</a> for more information about listening for events from child components, reading child\
		properties or invoking child methods, and using a service for bi-directional communication between components.\
	</p>",

// NEXT STEPS
"<h2>Next steps</h2>\
<p>Congratulations! You've completed your first Angular app!</p>\
<p>You have a basic online store catalog with a product list, \"Share\" button, and \"Notify Me\" button.\
	You've learned about the foundation of Angular: components and template syntax.\
	You've also learned how the component class and template interact, and how components communicate with each other.\
</p>",
// CONCLUDE STEP 1
"<li>\
		Next section, \"In-app navigation\", you will create a product details page that can be accessed by clicking a product name and that has its own URL\
		pattern.</li>",

// ~~~~~~~~ PART 2 IN APP NAVIGATION ~~~~~~~~~
"<h1>In-app navigation</h1>\
	<p>At the end of <a href=\"start\" title=\"Get started with a basic Angular app\">part 1</a>, the online store\
		application has a basic product catalog.\
		The app doesn't have any variable states or navigation.\
		There is one URL, and that URL always displays the \"My Store\" page with a list of products and their\
		descriptions.</p>",
//INTRO
    "<p>This guide shows you how to use Angular <a href=\"guide/glossary#router\" title=\"Router definition\>routing</a> to\
		give the user in-app navigation. In a single-page app, instead of loading new pages, you show different\
		components and data to the user based on where the user is in the application.</p>\
	<p>The router lets you display full product details in separate <a href=\"guide/glossary#view\"\
			title=\"View definition\">views</a>, each with its own URL. Routing enables navigation from one view to the\
		next (within the same page) as users perform tasks such as the following:</p>\
	<ul>\
		<li>Entering a URL in the address bar to navigate to a corresponding view.</li>\
		<li>Clicking links on the page to navigate to a new view.</li>\
		<li>Clicking the browser's back and forward buttons to navigate backward and forward through the browser\
			history.</li>\
	</ul>",


  ];

  constructor(public guideStates: GuideStatesService, private sanitizer: DomSanitizer) {}

  get currentContent() {
    return this.sanitizer.bypassSecurityTrustHtml(this.content[this.currentStep]);
  }

  ngOnInit() {
    // window.scroll(0, 0);
  }
  //   onActivate(event) {
  //     window.scroll(0,0);
  //     //or document.body.scrollTop = 0;
  //     //or document.querySelector('body').scrollTo(0,0)
  // }
}

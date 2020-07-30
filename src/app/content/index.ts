import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const codeToCopy = {
  //code-1
  'code-1': hljs.highlightAuto(`
<h2>Products</h2>
<div *ngFor="let product of products">
</div>`).value,
  //code-2
  'code-2': hljs.highlightAuto(`
<h2>Products</h2>
<div *ngFor="let product of products">
  <h3>
    {{ product.name }}
  </h3>
</div>`).value,
  //code-3
  'code-3': hljs.highlightAuto(`
<h2>Products</h2>
<div *ngFor="let product of products">
  <h3>
    <a [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>
</div>`).value,
  //code-4
  'code-4': hljs.highlightAuto(`
<h2>Products</h2>

<div *ngFor="let product of products">

  <h3>
    <a [title]="product.name + ' details'">
    {{ product.name }}
    </a>
  </h3>

  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>

</div>`).value,
  //code-5
  'code-5': hljs.highlightAuto(`
<h2>Products</h2>

  <div *ngFor="let product of products">

  <h3>
    <a [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>

  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>

  <button (click)="share()">
    Share
  </button>

</div>`).value,
  //code-6
  'code-6': hljs.highlightAuto(`
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }
}`).value,
  //code-7
  'code-7': hljs.highlightAuto(`
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
`).value,
  //code-8
  'code-8': hljs.highlightAuto(`
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
`).value,
  //code-9
  'code-9': hljs.highlightAuto(`
<p *ngIf="product.price > 700">
  <button>Notify Me</button>
</p>
`).value,
  //code-10
  'code-10': hljs.highlightAuto(`
<button (click)="share()">
  Share
</button>

<app-product-alerts
  [product]="product">
</app-product-alerts>
`).value,
  //code-11
  'code-11': hljs.highlightAuto(`
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
`).value,
  //code-12
  'code-12': hljs.highlightAuto(`
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
`).value,
  //code-13
  'code-13': hljs.highlightAuto(`
<p *ngIf="product.price > 700">
  <button (click)="notify.emit()">Notify Me</button>
</p>
`).value,
  //code-14
  'code-14': hljs.highlightAuto(`
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
`).value,
  //code-15
  'code-15': hljs.highlightAuto(`
<button (click)="share()">
  Share
</button>

<app-product-alerts
  [product]="product" 
  (notify)="onNotify()">
</app-product-alerts>
`).value
};

export const content = [
  // ~~~~~~ PART 1 INTRO ~~~~~~
  `<h1>Part 1: Getting Started With a Basic Angular App</h1><hr> 
    <p> You are now staring at an online IDE called Stackblitz. You can  create Angular and React projects that are immediately online & shareable via link in just one click!</p>`,
  `<p>This pane, on the right, shows the starting state of the sample Angular app. It defines a frame with a top bar (containing the store name and checkout icon and the title for a product list which will be populated and dynamically updated with data from the application).</p>`,
  `<p>The project pane on the left shows the source files that make up the application, including all of the infrastructure and configuration files. <br><br> The currently selected file shows up in the editor pane in the middle where you will be coding.</p>`,
  // STACKBLITZ TIPS
  `<h2>StackBlitz tips</h2> <hr>
    <p><span style="font-weight:bold;">Did you know that you can log into StackBlitz to save and resume your work?</span><br> <br>
        If you have a GitHub account, you can log into StackBlitz 
        with that account. In order to save your progress, first 
        fork the project using the Fork button <img class="iconImage" src="assets/forkImg.png" alt="fork icon"> at the top left,
        then you'll be able to save your work to your own StackBlitz
        account by clicking the Save button.
    </p>`,
  `<h2>StackBlitz tips</h2> <hr> 
    <p>If the StackBlitz preview pane isn't showing what you 
              expect, save and then click the refresh button.</p> 
    <p>StackBlitz is continually improving, so there may be 
          slight differences in generated code, but the app's 
          behavior will be the same.</p>`,
  `<h2>StackBlitz tips</h2> <hr> 
    <p>The files you'll use throughout 
				the tutorials are in the <strong><em>src</em></strong> folder of the StackBlitz example apps.</p>`,

  // TEMPLATE SYNTAX...STEP 1
  `<h2>Now Let's Get To It!</h2> <hr>
    <p> <span class="stepsTitle">STEP 1:</span>   In the <em><strong>product-list</strong></em> folder, open the template file <em><strong>product-list.component.html</strong></em>.</p>`,
  // STEP 2
  `<p> <span class="stepsTitle">STEP 2:</span> Modify the product list template to display a list of product names by iterating over the predefined 
    list of products with the <em>*<a href="https://angular.io/api/common/NgForOf" target="_blank" rel="noopener noreferrer">ngFor</a></em> directive on a <em>&lt;div&gt;</em>, as follows:</p>
    <copy-code header="src/app/product-list/product-list.component.html">${codeToCopy["code-1"]}</copy-code>
    <p>With <strong><em>*ngFor</em></strong>, the <em>&lt;div&gt;</em> repeats for each product in the list. Similar to a for loop.</p> 
    <p><em>*<a href="https://angular.io/api/common/NgForOf" target="_blank" rel="noopener noreferrer">ngFor</a></em> is a "structural directive". Structural directives shape or reshape the DOM\'s structure, typically by adding, removing, and
                manipulating the elements to which they are attached. Directives with an asterisk,*, are
                structural directives.</p>`,
  `<p>To display the names of the products, use the interpolation syntax <strong>{{}}</strong>. Interpolation renders
                a property's value as text. Inside the <em><strong>&lt;div&gt;</strong></em>, add an <em><strong>&lt;h3&gt;</strong></em> to display
                the interpolation of the product's name property:<copy-code header="src/app/product-list/product-list.component.html">${codeToCopy["code-2"]}</copy-code></p>
    <p>The preview pane immediately updates to display the name of each product in the list.</p>
    <div class="imageDiv">
      <img src="assets/template-syntax-product-names.png" alt="list of product names">
    </div>`,
  // STEP 3
  `<p><span class="stepsTitle">STEP 3:</span> To make each product name a link to product details, add the <em><strong>&lt;a&gt;</strong></em> element and set its title to
                be the product's name by using the property binding <strong><em>[ ]</em></strong> syntax, as follows:</p>
    <copy-code header="src/app/product-list/product-list.component.html"> ${codeToCopy["code-3"]} </copy-code>
    <p>Interpolation <strong>{{ }}</strong> lets you render the
                property value as text; property binding <strong>[ ]</strong> lets you
                use the property value in a template expression.</p>`,
  `<p>In the preview pane, hold the pointer over a product
                name to see the bound name property value, which is
                the product name plus the word "details".</p>
    <div class="imageDiv">            
      <img src="assets/template-syntax-product-anchor.png" alt="product anchor">
    </div>`,
  // STEP 4
  `<p> <span class="stepsTitle">STEP 4:</span> Add the product descriptions. On the <strong><em>&lt;p&gt;</em></strong> element, use an
                <em>*<a href="https://angular.io/api/common/NgIf" target="_blank" rel="noopener noreferrer">ngIf</a></em> directive so that Angular only creates the
                <strong><em>&lt;p&gt;</em></strong> element if the current product has a description.</p>
                <copy-code header="src/app/product-list/product-list.component.html">${codeToCopy["code-4"]}</copy-code>`,
  `<p>The app now displays the name and description of each product in the list. Notice that the final product does not
                have a description paragraph. Because the product's description property is empty, Angular doesn't create the
                <em><strong>&lt;p&gt;</strong></em> element—including the word "Description".</p>
    <div class="imageDiv">            
      <img src="assets/template-syntax-product-description.png" alt="product description">
    </div>`,
  // STEP 5
  `<p> <span class="stepsTitle">STEP 5:</span> Add a button so users can share a product with friends. Bind the button's <em><strong>click</strong></em> event to the
                <em><strong>share()</strong></em> method (in <em><strong>product-list.component.ts</strong></em>). Event binding uses a set of
                parentheses, <strong>( )</strong>, around the event, as in the following <em><strong>&lt;button&gt;</strong></em> element:</p>
    <copy-code header="src/app/product-list/product-list.component.html">${codeToCopy["code-5"]}</copy-code>`,
  `<p>Each product now has a "Share" button:</p>
    <div class="imageDiv">            
      <img src="assets/template-syntax-product-share-button.png" alt="product share button">
    </div>
    <p>Test the "Share" button:</p>
    <div class="imageDiv">            
      <img src="assets/template-syntax-product-share-alert.png" alt="product share alert">
    </div>`,
  // CONCLUDE TEMPLATE SYNTAX
  `<p>The app now has a product list and sharing feature.
                In the process, you've learned to use five common features of Angular's template syntax:</p>
    <ul>
        <li><a href="https://angular.io/api/common/NgForOf" target="_blank" rel="noopener noreferrer">*ngFor</a></li>
        <li><a href="https://angular.io/api/common/NgIf"target="_blank" rel="noopener noreferrer">*ngIf</a></li>
        <li>Interpolation <code>{{ }}</code></li>
        <li>Property binding <code>[ ]</code></li>
        <li>Event binding <code>( )</code></li>
    </ul> 
    We will now move onto components!`,
  // COMPONENTS INTRO
  `<h2>Components</h2><hr/>
    <p><strong><em>Components</em></strong> define areas of responsibility in the user interface, or UI,
                that let you reuse sets of UI functionality.
                You've already built one with the product list component.</p>`,
  // PART 2 COMPONENT 
  `<p>A component consists of three things:</p>
    <ul>
        <li><strong>A component class</strong> that handles data and functionality. In the previous section, the product
            data and the <code>share()</code> method in the component class handle data and functionality, respectively.
        </li>
        <li><strong>An HTML template</strong> that determines the UI. In the previous section, the product list's HTML
            template displays the name, description, and a "Share" button for each product.
        </li>
        <li><strong>Component-specific styles</strong> that define the look and feel.
            Though product list does not define any styles, this is where component CSS
            resides.
        </li>
    </ul>
    <p>An Angular application comprises a tree of components, in which each Angular component has a specific purpose and
                responsibility.</p>`,
  // PART 3 COMPONENT
  `<p>Currently, the example app has three components:</p>
    <div class="imageDiv">            
      <img src="assets/app-components.png" alt="app components distinction image">
    </div>
    <ul>
        <li><em><strong>app-root</strong></em> (orange box) is the application shell. This is the first component to load and the parent
            of all other components. You can think of it as the base page.</li>
        <li><em><strong>app-top-bar</strong></em> (blue background) is the store name and checkout button.</li>
        <li><em><strong>app-product-list</strong></em> (purple box) is the product list that you modified in the previous section.</li>
    </ul>`,
  // CONCLUDE COMPONENT
  `<p>The next section expands the app's capabilities by adding a new component—<strong>a product alert</strong>—as a child of the product
                list component.</p>

    <p>For more information about components and how they interact with templates, see <a
            href="https://angular.io/guide/architecture-components"
            title="Concepts > Introduction to Components and Templates" target="_blank" rel="noopener noreferrer">Introduction to Components</a>.</p>`,
  // INPUT INTRO
  `<h2>Input</h2><hr/>
    <p>Currently, the product list displays the name and description of each product.
                The product list component also defines a <code>products</code> property that contains imported data for each
                product from the <code>products</code> array in <em><strong>products.ts</strong></em>.</p>
    <p>The next step is to create a new alert feature that takes a product as an input. The alert checks the product's
                price, and, if the price is greater than $700, displays a "Notify Me" button that lets users sign up for
                notifications when the product goes on sale.</p>`,
  // STEP 1
  `<p> <span class="stepsTitle">STEP 1:</span>  Create a new product alerts component by right clicking on the <em><strong>app</strong></em> folder and use the <em><strong>Angular Generator</strong></em> to generate a
        new component named <em><strong>product-alerts</strong></em>.</p>
        <div class="imageDiv">            
          <img src="assets/generate-component.png" alt="generate component">
        </div>
    
    <p>The generator creates starter files for all three parts of the component:</p>
        <ul>
            <li><code>product-alerts.component.ts</code></li>
            <li><code>product-alerts.component.html</code></li>
            <li><code>product-alerts.component.css</code></li>
        </ul>`,
  // STEP 2
  `<p><span class="stepsTitle">STEP 2:</span>Open <em><strong>product-alerts.component.ts</strong></em>.</p>
  <copy-code header="src/app/product-alerts/product-alerts.component.ts">${codeToCopy["code-6"]}</copy-code>
  <ol type="a">
    <li>
      <p>Notice the <strong>@<a href="https://angular.io/api/core/Component" class="code-anchor" target="_blank" rel="noopener noreferrer" >Component</a>()</strong> decorator.
                This indicates that the following class is a component. It provides metadata about the component,
                including its selector, templates, and styles.</p>
      <ul>
        <li>
          <p>The <strong>selector</strong> identifies the component. The selector is the name you give the
                    Angular component when it is rendered as an HTML element on the page. By convention, Angular
                    component selectors begin with the prefix <strong>app-</strong>, followed by the component name.</p>
        </li>
        <li>
          <p>The template and style filenames reference the HTML and CSS files that StackBlitz generates.</p>
        </li>
      </ul>
    </li>
    <li>
      <p>The component definition also exports the class,<em><strong>ProductAlertsComponent</strong></em>, which handles
                functionality for the component.</p>
    </li>
  </ol>`,
  // STEP 3
  `<p> <span class="stepsTitle">STEP 3:</span>  Set up the new product alerts component to receive a product as input by importing <strong><a href="angular.io/api/core/Input" class="code-anchor" target="_blank" rel="noopener noreferrer">Input</a></strong> from
          <strong>@angular/core</strong>.</p>
  <copy-code header="src/app/product-alerts/product-alerts.component.ts">${codeToCopy["code-7"]}</copy-code>`,
	//step 3.5
  `<p> <span class="stepsTitle">STEP 4:</span>In the <strong>ProductAlertsComponent</strong> class definition, define a property named
            <strong>product</strong> with an <strong>@<a href="angular.io/api/core/Input" class="code-anchor" target="_blank" rel="noopener noreferrer">Input</a>()</strong>
            decorator. The <strong>@<a href="angular.io/api/core/Input" class="code-anchor" target="_blank" rel="noopener noreferrer">Input</a>()</strong> decorator
            indicates that the property value passes in from the component's parent, the product list component.
  </p>
  <copy-code header="src/app/product-alerts/product-alerts.component.ts">${codeToCopy["code-8"]}</copy-code>
		`,
  // STEP 4
  `<p> <span class="stepsTitle">STEP 5:</span> Define the view for the new product alert component.</p>
  <li>Open the <strong>product-alerts.component.html</strong> template and replace the placeholder paragraph with
    a "Notify Me" button that appears if the product price is over $700.</li>
  <copy-code header="src/app/product-alerts/product-alerts.component.html">${codeToCopy["code-9"]}</copy-code>
	`,
  // STEP 5
  `<p> <span class="stepsTitle">STEP 6:</span>Display the new product alert component as a child of the product list.</p>
		<ol type="a">
			<li>
				<p>Open <strong>product-list.component.html</strong>.</p>
			</li>
			<li>
				<p>To include the new component, use its selector, <strong>app-product-alerts</strong>, as you would an HTML
					        element.</p>
			</li>
			<li>
				<p>Pass the current product as input to the component using property binding.</p>
			</li>
    </ol>
    <copy-code header="src/app/product-list/product-list.component.html">${codeToCopy["code-10"]}</copy-code>
	`,
  // CONCLUDE INPUT
  `<p>The new product alert component takes a product as input from the product list. With that input, it shows or hides
	            the "Notify Me" button, based on the price of the product. The Phone XL price is over $700, so the "Notify Me"
	            button appears on that product.</p>
      <div class="imageDiv">            
        <img src="assets/product-alert-button.png" alt="product alert button">
      </div>
	<div>
		<p>See <a href="angular.io/guide/component-interaction" title="Components &amp; Templates > Component Interaction" target="_blank" rel="noopener noreferrer">Component Interaction</a> for more
			        information about passing data from a parent to child component, intercepting and acting upon a value from
			        the parent, and detecting and acting on changes to input property values.</p>
	</div>`,
  // OUTPUT INTRO
  `<h2>Output</h2><hr/>
    <p>To make the "Notify Me" button work, you need to configure two things:</p>
    <ul>
        <li>the product alert component to emit an event when the user clicks "Notify Me"</li>
        <li>the product list component to act on that event</li>
    </ul>`,
  // STEP 1
  `<p> <span class="stepsTitle">STEP 1:</span>Open <code>product-alerts.component.ts</code>.</p>
  <li>
		<p>Import <strong><a href="angular.io/api/core/Output" class="code-anchor" target="_blank" rel="noopener noreferrer">Output</a></strong> and
			        <strong><a href="api/core/EventEmitter" class="code-anchor" target="_blank" rel="noopener noreferrer">EventEmitter</a></strong> from
			        <strong>@angular/core</strong>:</p>
  </li>
  <copy-code header="src/app/product-alerts/product-alerts.component.ts">${codeToCopy["code-11"]}</copy-code>
  `,
  // STEP 3
  `<p> <span class="stepsTitle">STEP 2:</span>In the component class, define a property named <strong>notify</strong> with an
			        <strong>@<a href="angular.io/api/core/Output" class="code-anchor" target="_blank" rel="noopener noreferrer">Output</a>()</strong> decorator and an instance of
			        <strong><a href="angular.io/api/core/EventEmitter" class="code-anchor" target="_blank" rel="noopener noreferrer"> EventEmitter</a>()</strong>. This allows the product
              alert component to emit an event when the value of the notify property changes.</p>
  <copy-code header="src/app/product-alerts/product-alerts.component.ts">${codeToCopy["code-12"]}</copy-code>

	<p> <span class="stepsTitle">NOTE:</span> When the Angular CLI generates a new component, it includes an empty constructor, the
		        <strong><a href="angular.io/api/core/OnInit" class="code-anchor">OnInit</a></strong> interface, and the <strong>ngOnInit()</strong>
		        method.
		        Since the following example isn't using them, they are omitted here for brevity.</p>`,
  // STEP 4
  `<p> <span class="stepsTitle">STEP 3:</span>In the product alert template, <strong>product-alerts.component.html</strong>, update the "Notify Me" button with
        an event binding to call the <code>notify.emit()</code> method.</p>
  <copy-code header="src/app/product-alerts/product-alerts.component.html">${codeToCopy["code-13"]}</copy-code>

	`,
  // STEP 5
  `<p> <span class="stepsTitle">STEP 4:</span>Next, define the behavior that should happen when the user clicks the button. Recall that it's the parent,
                product list component—not the product alerts component—that acts when the child raises the event. In
                <strong>product-list.component.ts</strong>, define an <strong>onNotify()</strong> method, similar to the
                <strong>share()</strong> method:</p>
  <copy-code header="src/app/product-list/product-list.component.ts">${codeToCopy["code-14"]}</copy-code>
  `,
  // STEP 6
  `<p> <span class="stepsTitle">STEP 5:</span> Finally, update the product list component to receive output from the product alerts component.</p>
		<p>In <strong>product-list.component.html</strong>, bind the <strong>app-product-alerts</strong> component (which is
			        what displays the "Notify Me" button) to the <strong>onNotify()</strong> method of the product list component.
    </p>
    <copy-code header="src/app/product-list/product-list.component.html">${codeToCopy["code-15"]}</copy-code>
    `,
  // STEP 7
  `<p> <span class="stepsTitle">STEP 6:</span> Try the "Notify Me" button:</p>
        <div class="imageDiv">            
          <img src="assets/product-alert-notification.png" alt="product alert notification">
        </div>
  <p> <span class="stepsTitle">NOTE: </span>See <a href="angular.io/guide/component-interaction" title="Components &amp; Templates > Component Interaction" target="_blank" rel="noopener noreferrer" >Component
                Interaction</a> for more information about listening for events from child components, reading child
                properties or invoking child methods, and using a service for bi-directional communication between components.
  </p>`,

  // NEXT STEPS
  `<h2>Next steps</h2><hr/>
    <p style="font-size:20px;">Congratulations! You've completed your first Angular app!</p>
    <p>You have a basic online store catalog with a product list, "Share" button, and "Notify Me" button.
                You've learned about the foundation of Angular: components and template syntax.
                You've also learned how the component class and template interact, and how components communicate with each other.
    </p>
    <li>Next section, "In-app navigation", you will create a product details page that can be accessed by clicking a product name and that has its own URL
		pattern.</li>`,

  // ~~~~~~~~ PART 2 IN APP NAVIGATION ~~~~~~~~~
  `<h1>In-app navigation</h1>
	<p>At the end of <a href="start" title="Get started with a basic Angular app">part 1</a>, the online store
		application has a basic product catalog.
		The app doesn't have any variable states or navigation.
		There is one URL, and that URL always displays the "My Store" page with a list of products and their
		descriptions.</p>`,
  //INTRO 
  `<p>This guide shows you how to use Angular <a href="guide/glossary#router" title="Router definition>routing</a> to
		        give the user in-app navigation. In a single-page app, instead of loading new pages, you show different
		        components and data to the user based on where the user is in the application.</p>
	<p>The router lets you display full product details in separate <a href="guide/glossary#view"
			    title="View definition">views</a>, each with its own URL. Routing enables navigation from one view to the
		        next (within the same page) as users perform tasks such as the following:</p>
	<ul>
		<li>Entering a URL in the address bar to navigate to a corresponding view.</li>
		<li>Clicking links on the page to navigate to a new view.</li>
		<li>Clicking the browser's back and forward buttons to navigate backward and forward through the browser
			history.</li>
	</ul>`
];
# A JAM Stack e-Commerce with 11ty.js, Tailwindcss, and Foxy.io

Kickstart your e-commerce with a few clicks.

#### Are you in a rush? Go for it!

Click the `deploy` button below, and you'll have in a few minutes:

1. your site up and running on the web;
1. a new repository ready to receive pushes;
1. continuous deployment ready to go ― each new commit to
   the master branch will result in a new version published online;
1. your store ready to accept orders;

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ndvo/jamstack-web-starter">
	<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify">
</a>


# Overview

This project offers you a ready-made JAM Stack website with a hosted e-commerce solution. You'll see it in action right away and able to customize everything to fit your needs.

- **[JAM Stack?](https://jamstack.org/)** a serverless architecture providing pre-rendered websites.
- **[Hosted e-commerce solution?](https://wiki.foxycart.com/v/2.0/foxycarts_reason_for_being)** an e-commerce solution professionally managed. All security and compliance concerns are taken care of. You can focus on building your content.
- **[Continuous deployment?](https://www.netlify.com/products/workflow/)** your code will be easily and continuously delivered to production.

**[Convinced yet? Let's do it!](#lets-do-it)** Not quite? Go on.

## Why?

In short: **because you'll have a lightning-fast, safe and inexpensive e-commerce website!**

Here's a longer version:

- **performance:** a JAM Stack makes your website very fast. It's no miracle. Every page is pre-built during the compilation. Therefore not only is there no processing to be done when your client visits your store, but also the website can be distributed among many different servers across the globe with a service called Content Delivery Network (CDN). This means that your client will access the fastest possible server anywhere it is.
- **security:** the JAM Stack architecture means the server does not run anything. Therefore, it won't run anything provided by a malicious user. It is also not connected to any database, so you'll have no issues there either. The shopping cart and payment processing are done by a [PCI Compliant Level 1 Service Provider](https://wiki.foxycart.com/static/foxycart_security).
- **infrastructure costs:** the serverless architecture of JAM Stack requires only the CDN servers, which would probably be necessary anyway. 
- **ease of development** there are few requirements for the development environment. Testing can be done without much effort, including manual and acceptance tests.

## Who?

This is an Open Source project (as you can see), built on top of [awesome projects](#acknowledgements) and sponsored by Foxy.io.

The project was conceived after the guys at Foxy realized it could help many small businesses and non-profit organizations quickly go online after being severely hit by the COVID-19 pandemic.

## How to use this project?

That's easy!

1. Fork it or Deploy it on Netlify
1. Customize it by adding your brand and products

Upon clicking the deploy to Netlify button, you'll have a website up and running, a forked repository to work with and you'll be able to start customizing right away.

We're adding relevant comments to the code so that you understand clearly where and how you can change it to achieve what you need.  We're adding handy comments in strategic places to help you figure out how to customize it. Look for 'Tip:' in the files. We surely cannot include everything there is to know, but you'll find some helpful references.

### How?

# Let's do it

There are two ways for you to start your own JAM Stack e-commerce using this repository. You may fork it and customize it, or you may start your own from scratch following the tutorial below.

## Let's fork it!

If you want to fork it, go ahead! Every file is documented so that you will know what to tweak and how.

Simply click the fork me button, and you will have your own version of the repository.

## Let's deploy it!!

**What?** That's it! You can now deploy your own version of the site so that you can already see it in production.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ndvo/jamstack-web-starter">
	<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify">
</a>

**Is that it?** Pretty much. You do need to configure your own Foxy.io account and set the name, logo, and products of your store, but it is basically done. But what's the fun on that? I'm sure you need to create your own features and make your store unique.

## Let's hack it!!!

It's time to get our hands dirty to have our e-Commerce ready to sell!

#### In short:

1. **Set your own products:** there's a `_products` folder. Replace the products with your own. If you need to fetch your products from an API or from a file, check the [data section](#data).
1. **Set your own logo:** replace the `src/static/img/mylogo.png` file with your own. Also, replace the *favicon* files in `src/static/img/`.
1. **Set your own theme:** if you are comfortable with CSS and TailWindCSS, go for it. If you aren't, check out the `tailwind.config.js` file in the root directory of the project. By setting these variables, you can start making the website look your own.
1. **Set your own videos:** there's a `src/_highlights` folder. In this Each file contains something you want to highlight. Add or remove de `.md` files do add or remove highlights. The first one will be the first video available. They are also used to build the Highlight section of the website.
1. **Set your own texts:** there's a `src/_data/site.yaml` file. You'll find you can customize most of the site's texts there. You can set the navigation links, highlight texts, and display messages to your users.
 1. **Fetch your data on compile time:** there's a `src/_data/lorem.js` file. It demonstrates how to fetch data from your own API during compile time. This way, you can have your content updated on each new deploy. 

**Remember to remove `src/_data/lorem.js` file.**

It makes real requests during build time. If you are not going to use the data fetched it is simply making unnecessary requests to the server and making your build time slower.

## Want to dive deeper? 

Here are some concepts that will help you go further

- **11ty's data:** your [data can be stored however you want](https://www.11ty.dev/docs/data/).  Use the [computed data](https://www.11ty.dev/docs/data-computed/) feature to fetch from a database or API you already have. Use simple text files in [YAML format](https://yaml.org/spec/1.2/spec.html#Preview) in the `_data` directory if you are starting from scratch. You'll be amazed at the simplicity of this approach. For complex needs, you can use Javascript files and use the default export to provide the data. With this approach, you can preprocess the data any way you want. The [`src/_data/lorem.js` file demonstrates quite simply how to fetch data from an API](blob/master/src/_data/lorem.js).
- **11ty's templates:** your template files [can most probably be written in a templating language you are already familiar with](https://www.11ty.dev/docs/languages/). If you don't know any of these, don't worry, you can customize the templates provided in this project, and you'll learn the templating language, we're using as you go.  We're using mostly [Nunjucks templating language](https://mozilla.github.io/nunjucks/templating.html) and [Markdown](https://guides.github.com/features/mastering-markdown/) in this project. Nunjucks is a powerful language and will most probably meet your needs, while Markdown is as simple as it can get, and you feel quite comfortable with it in minutes.
- **TailwindCSS:** creating a responsive and visually attractive website can be quite a hard task. There are plenty of tools out there. For this project we chose Tailwind. It focuses on allowing custom designs. Of course, there are a lot of ready-made designs out there you can simply use, but the fact is that sooner or later, you'll want to tweak it and build your own custom design.  Tailwind is highly customizable and avoids imposing anything on you. Simply go to [tailwindcss.com](https://tailwindcss.com/) and use their search bar to find a class that meets your needs. You'll also be interested in configuring TailwindCSS using the [`tailwind.config.js` file](tailwind.config.js).
- **e-commerce:** Foxy.io's hosted [cart](https://docs.foxycart.com/v/2.0/cart) solution fits perfectly with the serverless architecture. It does not require you to use any particular CMS or CRM and does not require you to provide your products and prices in advance.  It provides the payment and shopping cart solution and allows you to [customize it's look and feel](https://docs.foxycart.com/v/2.0/templates), 

# Example

Here's a plan: let's first add our own products. In doing so, we will be able to understand how well the store will fit our needs. Next, we'll tweak it looks and feel. Finally, we'll add some extra niceties for our store.

### Where do my products go?

You can do this in several ways. We'll explore two of them: creating your products as Markdown files and consuming your products from an external API.

#### Customizing collections

You can learn a great deal about Eleventy's collections https://www.11ty.dev/docs/collections/.

Here's what you need to get started:

1. Create a "products" collection by creating a `_products` folder in the `src` folder. If you wish to create new collections, simply create folders with different names, starting with `_` as in `_name`.
1. Customize your collection using the `_products.json` file in the `_products` folder.
   1. Set a "category" for all products in this folder. This will allow you to create pages that list all products in a category.
   1. Set the permalink for the items in the category. This will allow you to have a different page for each product.

##### Example: Allow the user to filter by a category

Here are the changes we need to make to allow the user to filter our products by category with a simple select button.

We will filter only the products available on the page and learn how to use data from our collection items in the process.

###### Add an attribute to the data
Let's go to the [`src/_products`](tree/master/src/_products) folder and edit some of these products.

Let's add a new attribute called 'productType' and set it to 'cool':

```yaml
productType: cool
```

Select some other products and add a different productType, perhaps the tag 'hot':

```yaml
productType: hot
```

###### Use the data in the HTML

Now lets create the select element. Navigate to the [`src/index.js` file](blob/master/src/index.njk) and look for a line where it reads:

` {% for product in collections.product | sortByPriceHighToLow %}`

Before the `section` tag above that line we'll add a simple select element:

```html
<select data-action="hideProductType">
  <option value="all">All</option>
  <option value="hot">Hot</option>
  <option value="cool">Cool</option>
</select>
```

We will use this 'select' button to choose between *cool* and *hot* products.

Next, let's add a class to our products so that we can distinguish the cool ones from the hot ones. Let's add a 'product' class to the beginning of our product class list and we will access the productType data to add the productType to the end of the classList.

```nunjucks
<section class="container p-2 pb-4 m-auto flex w-full flex-wrap items-stretch justify-start relative">
  {% for product in collections.product | sortByPriceHighToLow %}
  <div class="product flex flex-col items-center w-full
  lg:w-1/2 p-2 {{ product.data.productType}}">
    {# TIP: Use includes to avoid repetition
```

###### Add the behaviour in the js file

Finally, let's go to the `src/_assets/scripts/app.js` file and add some behavior to our select button.

First, let's add a function that will filter the results.  This is certainly not the most performant function, but you can easily get what it does:

```js
// Filter selection button
function hideProductType(e) {
  var toShow = e.target.value;
  if (toShow == 'all') {
    document.querySelectorAll('div.product')
      .forEach(product => product.classList.remove('hidden'));
  } else {
    document.querySelectorAll('div.product')
      .forEach(product => product.classList.add('hidden'));
    document.querySelectorAll('div.product.'+toShow)
      .forEach(product => product.classList.remove('hidden'));
  }
}
```

It simply adds a 'hidden' class to all products and then removes from those we want to display.

Now let's add this behaviour to the select button:

```
document.querySelector('select[data-action="hideProductType"]')
  .addEventListener("change", hideProductType);
```

This code should go the other `addEventListener` in this file.

There you go! Our select filter is ready. Not nice, but ready.


#### Customize the look and feel

Let's make it nice, shall we?

This won't be difficult. First, let's replace the content of the default selection to "Filter the results."

```
  <option value="all">Filter the results</option>
```

Now it's easier to understand. Next, thanks to Tailwind we'll simply add some classes to our select element.

```
<select class="m-4 p-1 text-darker border-2 border-light rounded" data-action="hideProductType">
```

That's it!

We made our select have rounded borders. We also used a configurable color from our `tailwind.config.js` file. Did you notice that we set the border color to 'light'? There is no such color by default, but it is configured in our tailwind.config.js file.

Now, if someone wishes to change the theme, a quick tweak to the config file will do.

# Where to go from here?

Go ahead and click the deploy button. It will fork this repository for you and deploy a version to production. Go ahead and customize the files at will. You'll find some handy tips along the way.

You'll probably find out that these guys are loyal friends:

- https://docs.netlify.com/
- https://wiki.foxycart.com/
- https://www.11ty.dev/docs/
- https://tailwindcss.com/


# Acknowledgements

* Site foundation by https://github.com/scottishstoater/jamstack-web-starter
* Quantity button component from https://tailwindcomponents.com/component/number-input-counter
* TailwindCSS.com is great.
* 11ty static site generator: https://www.11ty.dev/
* Site layout and elements from https://stitches.hyperyolo.com/

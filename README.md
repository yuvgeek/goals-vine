<img src="src/assets/logo-in-blue.png" width="300">

# Goals Vine
<b>Goals Vine</b> is an app to transform your goals to reality.


<img src="https://img.shields.io/badge/styled%20with-prettier-ff69b4.svg?style=flat-square"/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/9fe8f795-32e2-46ae-9b19-878271506000/deploy-status)](https://app.netlify.com/sites/goals-vine/deploys)

Are you one of them who sets a New Year resolution (or) any goals at the beginning of the year but you don't follow it after?

Then this is the app for you.

## Idea behind Goals Vine

People set goals to achieve things.  But, we tend to lose focus of most of the goals for some reason. So, I did a mini-survey with some close people to understand other's perspectives on why people lose focus after setting goals & how we can solve them.

### Problems

These are key problems identified from the survey:

1. Forgetting the goals due to busy life.
2. No Motivation to continue.
3. No way to Measure our goals.

### Solutions

These are the suggestion received from the survey to solve those problems:

1. Send a reminder mail every month to remember their goals.
2. Send Motivational quotes & images in reminder mail to continue their progress.
3. Offer statistics to show their growth.
4. Categorize the goals to know how much one is achieving or lagging in a specific category.
5. Shows Leader board to compete with others.

This made to create **Goals Vine**. 

## Introducing Goals Vine 🥳 🎊

**Goals Vine** tracks your goals, motivate and reminds you to convert them into reality.

## Tech Stack 💻

 [Clerk](https://clerk.dev/) - User Management

[HarperDB](https://harperdb.io) - Database

[Angular 12](https://angular.io) - Frontend Development

[Netlify](https://netlify.com) - Application Hosting

[Netlify function](https://www.netlify.com/products/functions/) - Backend API & Hosting

[Nodemailer](https://nodemailer.com/) - Send email to user.


## UI/UX 🖌️

Utilized Material Design throughout the application to follow the industry standards.

## Code Quality 👮‍♂️

Used Prettier, ESlint & TypeScript to improve the code quality. Followed best coding standards set by Angular. Used RxJS for reactive programming!

In a team, each developer uses a different coding environment. Some might use VS Code, others might use Vim. VSCode offers Prettier, ESLint extensions which helps them to fix the issues while coding itself.

But, what if a new member joined a team and committed the code in a different coding environment with the files are not formatted or not followed ESLint rules?

To avoid those, I've introduced a pre-commit hook with husky + lint-staged + prettier + eslint. 

What it does is, whenever you commit the code with `git commit` or any tool, it will automatically format it based on prettier configuration & runs the eslint only on the committed files. This helps the team to be aligned in the same coding formats. 

You can see the below image. I committed files for designing the home page. It runs prettier to format the code & after that it runs ESLint to ensure Code Quality.

![linter.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627663703646/Ko0LLo9M2.png)

[Lint-staged](https://github.com/okonet/lint-staged) - Run linters against staged git files and don't let 💩 slip into your codebase!

[Husky](https://www.npmjs.com/package/husky) - Husky improves your commits and more 🐶 woof!

## How to use App? 📙

Navigate to the  [Goals Vine](https://goals-vine.netlify.app/) App.

![Screenshot 2021-07-30 at 8.09.53 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627656067703/lxuZuQSqR.png)

If you are a new user, click **Register** or **Login** with your credentials. Below is the login screen.


![Screenshot_2021-07-30 Goals Vine.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627656318750/CYyYa9q8U.png)

Once you logged in, you will be landed on the dashboard screen. The dashboard page shows you the status of the Not Started/In Progress/Completed goals. 

![Screenshot_2021-07-30 Goals Vine(1).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627656519273/ejIMMo2QZ.png)

If you scroll down, you can also see the graph for goals set by month and category. You can see below Pie chart that I've added more goals under the **Health** category & I targetted more goals on **Septemeber** month.

![Screenshot_2021-07-30 Goals Vine(3).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627656683268/nikOKhRPBL.png)

Navigate to the **Goals** page from the left navigation to add, view, and update the Goal. In the below screenshot, you can see that there are 2 goals is in Not Started, 1 goal is in progress & 1 goal is completed.


![Screenshot_2021-07-30 Goals Vine(5).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627656927687/_8SQesXZl.png)

Before you add a goal, you should add **Category**. Goals are grouped by Category to show more stats. Let's create a new category as **Article Writing** by clicking + icon at the bottom of the page.


![Screenshot_2021-07-30 Goals Vine(6).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627657188200/TQigcojbS.png)


![Screenshot_2021-07-30 Goals Vine(8).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627657322266/PnXL8G3tv.png)

Once you added, you can able to see the **Article Writing** Category in the list.


![Screenshot_2021-07-30 Goals Vine(9).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627657473447/XNCuRdYii.png)

Now navigate to the **Goals** page to add a new goal. Give a name for the goal, choose the category, status & target date for this goal.


![chrome-capture.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1627657708859/Ua_WodafS.gif)


You can update the goal Progress by **Drag-drop from Not started -> In Progress -> Completed**. Also, you can update the goal by clicking it & a dialog will open with the existing value. In the screenshot below, you can see I changed 100 articles to 50 articles.


![chrome-capture (1).gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1627658068402/RAAyJpmVZ.gif)

If you would like to delete a goal, you can delete it by clicking the respective goal & press **Delete** option.


![Screenshot_2021-07-30 Goals Vine(10).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627662208336/Ycj7M1-je.png)

Navigate to the **account** page to see your account details & update it (if required).

![Screenshot_2021-07-30 Goals Vine(11).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627662315643/MmLl6nYkA.png)

Alternatively, you can go to the account section by clicking the User profile image at the header.


![Screenshot_2021-07-30 Goals Vine(12).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627662465611/IgGL32JFy.png)

Navigate to the **Leaderboard** section to see the user who completed most goals. This will motivate others to compete with other users.


![Screenshot_2021-07-30 Goals Vine(13).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627662542961/KXJBMexb_.png)

## Killer feature

One killer feature in the app is, even if you are away from the App, you will get an email from **Goals Vine** to remind you about your goals. It will have motivational quotes & Images.

This email will be triggered to every user each month with their goal stats. 

![Screenshot 2021-07-30 at 6.17.48 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627662796987/T4b6fl7AC.png)
 

------

## Application Details 📖

**URL:** https://goals-vine.netlify.app/

**Github Repo:** https://github.com/yuvgeek/goals-vine


## Challenges Faced 🤼

**Problem**: There is no `npm` package to integrate `Clerk` with the `Angular` framework. It has direct support only for React. Managing the Clerk with Angular is a tedious task. It took ~20% of the development effort. 

**Solution**: I completed the Clerk Integration with the help of @[Matej Bošnjak](@mbosnjak) & the Clerk team in the discord channel. Thanks to them.

---

**Problem**: Since I'm using the `Netlify function` for interacting with my `HarperDB`, I must return the API response within 10 seconds due to the time limit set by Netlify. Otherwise, my API will fail.

**Solution**: Considering the time-limit problem, I had to write my API & query in an optimized way to solve it.

---
**Problem**: To calculate the Leader board, I need to pull all the users from the `Clerk` database and simultaneously I need to query the goals with my `HarperDB`. Until today, I wasn't sure if there was a way to pull other user details from the Clerk.

**Solution**: With the help of the `Clerk` discord channel, I got the Postman collection for Clerk Backend API to interact with the database.

## Conclusion

I really enjoyed working on this App. Thanks to Clerk & Hashnode for pushing us to do many innovative apps. I created Cover Pic within 5 minutes in the `Slickr` app. Thanks to @[Savio Martin](@saviomartin).

I hope you enjoyed this article or found it helpful. 

You can connect with me on [Twitter](https://twitter.com/yuvgeek) & [Github](https://github.com/yuvgeek) 🙂

###  Support 🙌 

You can support me by buying me a coffee with the below link 👇

<a href="https://www.buymeacoffee.com/yuvgeek"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=yuvgeek&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

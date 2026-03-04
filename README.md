# Playwright Essential Training: Abstractions, Fixtures, and Complex Scenarios

This is the repository for the LinkedIn Learning course Playwright Essential Training: Abstractions, Fixtures, and Complex Scenarios. The full course is available from [LinkedIn Learning][lil-course-url].


![Playwright Essential Training: Abstractions, Fixtures, and Complex Scenarios][lil-thumbnail-url] 

Playwright is a newer tool that has joined the ranks of Cypress and Selenium in open-source automation tooling. Playwright works right out of the box, and its comprehensive feature set allows testers and developers to quickly create new test automation projects without having to rely on combining multiple libraries and tools together. Whether you are a manual tester looking to dip your toes into test automation or a seasoned test automation engineer, check out this course to get hands-on experience with the top features that make Playwright a great choice for your automated tests. Instructor Butch Mayhew takes you through some advanced features and covers best practices for writing, running, and maintaining tests as you scale with Playwright.

Learning objectives
- Decide the best way to create and manage test data within a Playwright project.
- Recommend the right types of abstractions to make with a Playwright project.
- Create custom page objects and fixtures within your Playwright project.
- Design tests that utilize the different network interceptions, mocks, and modifications within a Playwright test.
- Determine the necessary Playwright test and project configurations needed to make your Playwright project efficient.

_See the readme file in the main branch for updated instructions and information._

## Instructions

This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches

The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter.
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
Add changes to git using this command: git add .
Commit changes using this command: git commit -m "some message"

## Installing

1. To use these exercise files, you must have the following installed:
   - Node v20 or higher [Node Prebuilt Installer](https://nodejs.org/en/download/prebuilt-installer)
   - [VS Code](https://code.visualstudio.com/)
   - [VS Code Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. `git switch 01_02b` to swap to the base repository.
4. `npm install` to install the node depencies
5. `npx playwright install` to install the playwright browsers
6. `npx playwright test` to run all the test in the directory
7. Utilize the links found in [RESOURCES.MD](RESOURCES.md) for each video.

## Instructor

Butch Mayhew

Instructor description

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/butch-mayhew/).

[0]: # "Replace these placeholder URLs with actual course URLs"
[lil-course-url]: https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4E0DAQE9lAhxTlWiCg/learning-public-crop_675_1200/B4EZcYCy.PHsAc-/0/1748455076488?e=2147483647&v=beta&t=CPHzDNayYyzEjIJFGfimqD6l_PUS5tJY7f9d8NmHDqE

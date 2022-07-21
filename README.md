<h1 style="text-align: center">Rock, Paper, Scissors</h1>

A classic game of rock, paper, scissoers just to play and have fun!

<hr>

## Target Audience

This game can be played by anyone at anytime, though it will be aimed at a younger audience in terms of design. The rules will be included for anyone that has never played before.

<hr>

## UX Design

### User Stories

#### First time visitor

* I want a first time visitor to be able to see everything on the same page and its use to be obvious. I will do that with a big title, (Rock, Paper, Scissors), a score board, and three big clickable icons to play the game with.

* If they don't already know the rules I will have a bright, colourful button with the instructions just under the title.

### Colour

I wanted to make this game bright and bold to appeal to a younger audience and have chosen to go with high contrast primary and secondary colours, making it easy to see and provide visual feedback to the user.

* Blue, orange and white will be used.
* It will be one page to keep it simple with a button and a modal for the instructions and rules.

### Typography

* As this will be aimed at a generally younger audience I will be using a bold and bubbly font for the title (Fredoka One) and a similarly rounded and spaced font for the rest of the text to make it easy to read (Prompt).

### Images

* Images used in the player choice buttons came from [Creazilla](https://creazilla.com/)

### Wireframes

![landing page](assets/images/wireframes/index.png)
![landing page mobile](assets/images/wireframes/index-mobile.png)

<hr>

## Technologies

### Languages Used

* HTML
* CSS
* JavaScript

### Libraries Used

* Bootstrap
    * Page layout and modal
* Google Fonts
    * Importing typography
* Balsamiq
    * Used for creating wireframes

<hr>

## Testing

### Manual Testing

Manual testing mainly consisted of using console.logs to check the eventListeners were pushing the player and computer choices to the correct objects. I have left them in the code in order for anyone reviewing the code to easily see what how it functions. The following table documents this in detail.

| **Subject**    | **Criteria/Issues**                                     | **Test**                                                                  | **Outcome**                                                                        | **Action Taken**                                                                                                                                                                                                            |
|----------------|---------------------------------------------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Responsiveness | How responsive is the game screen (HTML/CSS)            | Use inspect tools to test responsiveness at each breakpoint listed below. |                                                                                    |                                                                                                                                                                                                                             |
|                |                                                         | >1200px                                                                   | Preview browser is over 1200px                                                     | N/A                                                                                                                                                                                                                         |
|                |                                                         | <1200px                                                                   | Looks great at this width                                                          | N/A                                                                                                                                                                                                                         |
|                |                                                         | <992px                                                                    | Bootstrap is dealing with spacing fine                                             | N/A                                                                                                                                                                                                                         |
|                |                                                         | <768px                                                                    | Player choices spread to two rows at around the 637px mark.                        | Reduce Image height/width from 150px to 100px.                                                                                                                                                                              |
|                |                                                         | <576px                                                                    | Cannot see at least the score board and player options on screen at the same time. | Reduce Image size to 75px. Scale down margins and padding. Smaller font sizing.                                                                                                                                             |
| Usability      | Instructions modal works.                               | Click instructions button                                                 | Modal appears on screen with instructions and closes when close button is clicked. | N/A                                                                                                                                                                                                                         |
|                | Page performance                                        | Use Chrome's lighthouse to assess performance.                            | All scores 90+.                                                                    | N/A                                                                                                                                                                                                                         |
| Gameplay       | Does the getComputerChoice return a random choice       | console.log computer choice array                                         | When page is refreshed, console.log changes between r, p and s.                    | N/A                                                                                                                                                                                                                         |
|                | Does getPlayerChoice return correct value when clicked. | console.log playerChoice array                                            | Nothing logging to console.                                                        | Forgotten to call function at the end of the script. Call Function.                                                                                                                                                         |
|                |                                                         |                                                                           | When clicked, appropriate string is logged to the console.                         | N/A                                                                                                                                                                                                                         |
|                | Does rps function return computer choice                | log const choice in rps function                                          | logs changing choice                                                               | N/A                                                                                                                                                                                                                         |
|                | Does rps function compare player and computer choices?  | Check player and computer score on scoreboard.                            | Can see both result logging but no score increase.                                 | Add score++ to if statements                                                                                                                                                                                                |
|                |                                                         |                                                                           | Score increases correctly                                                          | N/A                                                                                                                                                                                                                         |
|                | Does rps function give visual feedback for the user     | Should see text below choices telling the player the result.              | No text appearing.                                                                 | Update textContent of who-won holder.                                                                                                                                                                                       |
|                |                                                         |                                                                           | Added textContent to holder with appropriate win/loss condition. Still no text.    | Was linked to the <div> not the <p>. Moved ID tag.                                                                                                                                                                          |
|                |                                                         |                                                                           | Relevant text appears with win/loss                                                | N/A                                                                                                                                                                                                                         |
| Code           | HTML Verified                                           | Run through W3 validation                                                 | javascript with type module must not have 'defer'.                                 | defer removed                                                                                                                                                                                                               |
|                |                                                         |                                                                           | HTML Validated.                                                                    | N/A                                                                                                                                                                                                                         |
|                | CSS Verified                                            | Run through W3 validation                                                 | CSS Validated.                                                                     | N/A                                                                                                                                                                                                                         |
|                | JS Verified                                             | Run through JSLint                                                        | Multiple issues with code organisation.                                            |                                                                                                                                                                                                                             |
|                |                                                         |                                                                           |                                                                                    | Game keys arranged in alphabetical order.                                                                                                                                                                                   |
|                |                                                         |                                                                           |                                                                                    | Comparison operator changed to === over ==. This stopped the function working due to a double up of the player choice array. This has been fixed by removing the square brackets from the push in the click eventListeners. |
|                |                                                         |                                                                           | ++ considered unreliable                                                           | Changed ++ to scores to +1.                                                                                                                                                                                                 |
|                |                                                         |                                                                           | Module code for TDD producing warning in JSLint                                    | No solution found. Ignore comment added as it does not affect the game functioning in any way.                                                                                                                              |    


### Automated Testing

This can be found in the assets/tests folder in the GitHub repository.

### Bugs

* TypeError: Cannot read properties of null (reading 'querySelector')
    * I can find no solution to this bug. It claims it cannot read the property of the DOM element, which means that my code should not be working. However it works fine in my preview. I have spent a long time trying to fix this issue previously and spoke to two tutors on the support chat, neither could figure out why and scouring the web hasn't had anything fruitful. The only solution was to a problem I didn't have which was the script link being in the head of the HTML document. I will be testing manually from this point forward following the same procedure.

<hr>

## Deployment

### Deploying the Website

1. Start by logging in to GitHub and finding my repository.
2. Under Environments on the right hand side click github-pages.
3. Next to the top item on the deployment history list click the View Deployment button. This will open the page in a seperate tab for you to view.

### Forking the Repository
By forking the repository you will create a copy to your own Github account. Here you will be able to view or edit code without changing the original repository.

1. Start by logging in to GitHub and finding my repository.
2. In the top right hand corner of the window you will find the fork button.
3. You should now have your own copy of the repository.

### Cloning the Repository
You can also clone the repository to use locally.

1. Start by logging in to GitHub and finding [my repository](https://github.com/Charlie-Walsh/rock-paper-scissors).
2. To the left of the green Gitpod button is the Code dropdown button.
3. To clone using HTTPS copy the link under HTTPS.
4. Open Git Bash.
5. Make sure you change the working directory to the location you want the cloned directory to go.
6. Type "git clone" and paste the url you copied after it.
7. Press enter and your clone will be created.





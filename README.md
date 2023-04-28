# One-click Check-in (email and chat)
This project is a Google Apps Script that automates the process of checking in daily by replying to a designated email thread and posting to Google Chat.

## Files
`code.gs`
This is the main entry point of the application. It handles the process of replying to the email thread and posting to Google Chat.

`calendar.gs`
This script provides a utility function to get the day and date string for the current day.

`chatbot.gs`
This script posts a message to a specified Google Chat thread using a provided webhook URL.

`email.gs`
This script contains utility functions to find the check-in email thread and reply to it.

`index.html`
This is the user interface for the TRG Check-in application. It includes a button to trigger the check-in process and an input field for sending custom messages.

## Usage
- Create a new Google Apps Script project and upload all the files in the repository.
- Set up the necessary configuration variables in the code (e.g., config.groupEmail, config.webhookUrl, config.spaceThread, config.myName).
- Deploy the script as a web app and open the web app URL.
- Use the "Check-in" button to send an automated check-in message or enter a custom message and use the "Custom Message" button to send it.

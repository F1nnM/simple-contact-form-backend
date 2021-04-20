# Simple contact-form backend
A simple, configurable REST-API for sending mails.

In need for an email backend for a contact form? Simply fire up the docker-container or run this node application, and you're good to go.

At least, almost. You do need to configure it first.

## Config
This app has to be configured via the following environment variables:

Environment variable | Description                                                         | Value
---------------------|---------------------------------------------------------------------|----------------------------------------------------------------
MAIL_HOST            | Your mail server                                                    | `'smtp.example.com'`
MAIL_PORT            | Port of your server                                                 | usually `25` / `587` / `465`
MAIL_SECURE          | Use secure way of communication, usually only true when port is 465 | `true` / `false`
MAIL_USER            | User to log in to your server                                       | `'username'`
MAIL_PASS            | Password for the user                                               | `'password'`
MAIL_SENDER          | The email to send the mails from                                    | `'email@example.com'`
MAIL_RECEIVER        | The email(s) to send the mail to                                    | Either one email address or a comma-separated list of receivers
MAIL_SUBJECT         | The subject to send the mail with                                   | `'Contact Form'`

## Running it
Either use the Docker image `f1nnm/contact-backend` or run the node application yourself.
# Follow Button Animation

A simple follow button click animation that can be displayed in streaming tools such as OBS Studio and StreamLabs OBS.

## Usage

Below are two examples using this animation with StreamLabs OBS.

### As a browser source

This is my preferred method as it allows for a time interval so the animation is played every x seconds or minutes.

Simply add a new Browser Source with the url below...

`https://oliverflint.github.io/StreamWidgets/src/FollowAnim/FollowAnim.html`

Tick both *Shutdown source when not visible* and *Refresh browser when scene becomes active*

By default the animation will play every 60 seconds. To customise the interval add the interval parameter to the url `interval=10`

e.g.
`https://oliverflint.github.io/StreamWidgets/src/FollowAnim/FollowAnim.html?interval=10`

### As a media source

Simply add a new Media Source with the url below...

`https://oliverflint.github.io/StreamWidgets/src/FollowAnim/FollowAnim.webm`
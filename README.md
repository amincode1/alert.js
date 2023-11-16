# javscript alert class

- Simple
- Easy to use
- Small size
# screenshot
![Screenshot from 2023-11-16 21-17-45.png](https://drive.google.com/file/d/1Ei4i2siJXbq8sZehpOX1UuwRBFYR5zWp/view?usp=drive_link)

# Installation

- ## clone project from github
    
- ## tack `alert.js` file to your project
    
- ## add to html file
    

```html
 <script src="./alert.js"></script>
```

# To use

```js
 new Alert({
    text: 'Hello World !!',
 });
```

# What this class can do

- Sending alerts
- Choose between a range of alert severity
- Set a time to hide the alert
- Keep the alert when the mouse cursor is fixed on it
- The ability to add a link when clicking on the alert
- The possibility of adding a function that works when clicking on the alert
- Control where alert appear
- Executing a function after the alert ends

# options

| name | default | type | description |
| --- | --- | --- | --- |
| limit | 5   | Integer | The time the alert disappears in seconds |
| location | 'tc' | String | Where the notification appears `details` |
| clickUrl | null | String | The address of a website that you will go to when you click on the alert |
| clickFun | String | Function | A JavaScript function that runs when the logo is clicked |
| severity | 'success' | String | The serious type of poetry `details` |
| theme | 'lite' | String | The type of theme used on the site |
| after | null | Function | function run after alert end |

# option (location)

- ### 'tc' => top center
    
- ### 'tr' => top right
    
- ### 'tl' => top left
    
- ### 'bc' => bottom center
    
- ### 'br' => bottom right
    
- ### 'bl' => bottom left
    

# option (severity)

- ### 'success'
    
- ### 'info'
    
- ### 'warn'
    
- ### 'error'
    

# option (theme)

- ### 'lite'
    
- ### 'dark'
    

# option (clickUrl) how to use

```js
 new Alert({
   text: 'Hello World !!',
   severity: 'info',
   clickUrl: 'https://example.com'
 })
```

# option (clickFun) how to use

```js
 new Alert({
   text: 'Hello World !!',
   severity: 'info',
   clickFun: function(){
      console.log('Hello World !!');
   }
 })
```

# option (after) how to use

```js
 new Alert({
   text: 'Hello World !!',
   severity: 'info',
   after: function(){
       console.log('end alert..');
   }
 })
```

# style

| style name | default |
| --- | --- |
| width | '500px' |
| textAlign | 'center' |
| padding | '20px 10px' |
| position | 'fixed' |
| borderRadius | '10px' |
| direction | 'ltr' |
| cursor | 'pointer' |
| fontWeight | 'bold' |
| borderBottom | 'solid 4px' |

# change style

```js
 new Alert({
   text: 'Hello World !!',
   severity: 'info',
   style:{
      width: '200px',
      textAlign : 'left'
   }
 })
```

- ### If the style is outside the table above a new style can be added via
    

```js
 const new_alert = new Alert({
   text: 'Hello World !!',
   severity: 'warn',
   theme: 'dark'
 });

 new_alert.alertItem.style.fontSize = '18px';
 new_alert.alertItem.style.fontFamily = 'any font';
```

# Admin

## STEP 1 - First things first

    // In the console
    // First install jQuery
    npm install --save jquery
    // and jQuery Definition
    npm install -D @types/jquery


## STEP 2 - IMPORT

    // Now, within any of the app files (ES2015 style)
    import * as $ from 'jquery';
    //
    $('#elemId').width();
    
    // OR
        
    // CommonJS style - working with "require"
    import $ = require('jquery')
    //
    $('#elemId').width();

## #UPDATE - `Feb - 2017`
Lately, I'm writing code with `ES6` instead of `typescript` and am able to `import` without `* as $` in the `import statement`.   This is what it looks like now:

    import $ from 'jquery';
    //
    $('#elemId').width();

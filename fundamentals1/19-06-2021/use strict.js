// When it is located at the top of a script,
// the whole script works the “modern” way.
"use strict";

// this code works the modern way

// There is no directive like "no use strict" that reverts the engine to old behavior.
// Once we enter strict mode, there’s no going back.

// Should we “use strict”?
// The question may sound obvious, but it’s not so.
// One could recommend to start scripts with "use strict"… 
// But you know what’s cool?
// Modern JavaScript supports “classes” and “modules” – 
// advanced language structures (we’ll surely get to them), 
// that enable use strict automatically. So we don’t need to 
// add the "use strict" directive, if we use them.

// So, for now "use strict"; is a welcome guest at the top of your scripts. 
// Later, when your code is all in classes and modules, you may omit it.

// As of now, we’ve got to know about use strict in general.

// In the next chapters, as we learn language features, 
// we’ll see the differences between the strict and old modes. 
// Luckily, there aren’t many and they actually make our lives better.

// All examples in this tutorial assume strict mode unless (very rarely) 
// specified otherwise.
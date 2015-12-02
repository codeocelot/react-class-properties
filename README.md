# react-class-properties
My efforts to debug why class properties using fat arrows kept throwing errors.
ES6 classes have forced me to rethink everything I know about how to build js systems.  On one hand, it's nice to finally have a rational way to declare, extend and use classes.  On the other, there's a lot of strange issues to grasp.  One of them is understanding how `this` gets passed onto class properties.  In the constructor, the class inherits `this` through the call to `super()` (syntactic sugar?).  When working with the Component's methods (including lifecycles), `this` is no longer autobound.  Using fat arrow notation is a convenient way to preserve the contents of `this`.  Nonetheless, Babel 6 maintains fat arrows in class methods as a stage-0 enhancement.  So you need to include that in your babel configs (see  webpack.config.js).  

Overall, I am liking ES6 classes.  

https://courses.indepth.dev/angular/optimization-techniques/on-push-strategy

```text
should skip OnPush components in update mode when they are not dirty
should not check OnPush components in update mode when parent events occur

should check OnPush components on initialization
should call doCheck even when OnPush components are not dirty

should check OnPush components in update mode when inputs change
should check OnPush components in update mode when component events occur
should check parent OnPush components in update mode when child events occur
should check parent OnPush components when child directive on a template emits event
```
* Can probably write small examples for the above and also for

* _Keep in mind that ngDoCheck is triggered only for top-most child component. If the component has children, and Angular doesn't check this component, ngDoCheck is not triggered for them._

<br/>

* We can put a breakpoint on `markViewDirty(` to see the components that get marked as dirty 

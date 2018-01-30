import Component from '@ember/component';
import {run} from '@ember/runloop';

export default Component.extend({
    tagName: 'span',
    value: 10,
    finishValue:'',
    init() {
        this._super(...arguments); // passe tous les arguments de init()
        this.update();
    },
    update() {
        run.later(this, function() {
            if(this.get('value') > 0) {
                // this.set('value', this.get('value')-1)
                this.decrementProperty('value')
                this.update()
            } else {
                this.set('value', this.get('finishedValue'))
            }
        }, 1000)
    }
});

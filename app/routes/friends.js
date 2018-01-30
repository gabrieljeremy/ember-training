import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            { name:"Gilles", age:43 },
            { name:"Jeremy", age:27 },
            { name:"Nicolas", age:29 },
            { name:"Yves", age:51 },
            { name:"Krystelle", age:32 }
        ]
    }
});


import { Collection } from "./collection";

import { Iterator } from "./iterator";

export class IteratorCollection<T> implements Iterator<T> {
    
    private source : Collection<T>;
    private current : number;

    public constructor(source : Collection<T>) {
        this.source = source;
        this.current = 0;
    }

    empty ()  {
        return this.current >= this.source.size();
    }
    
    get ()  {
        if ( !this.empty()) {
            return this.source.get(this.current);
        }
        throw new Error('Get on emptyd.');
    }

    next ()  {
        if ( !this.empty()) {
            return this.source.get(this.current++);
        } 
        throw new Error('Next on empty.');
    }

}
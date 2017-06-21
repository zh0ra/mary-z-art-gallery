import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UserData implements InMemoryDbService{
    createDb(){
        let users = [
            {id: 1, name:'Mary', pass:'mary007'},
           {id: 2, name:'Alex', pass:'alex007'}
        ];
        return {users};
    }
}
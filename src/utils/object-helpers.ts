import {UsersType} from '../redux/store';

export const updateObjectInArray = (items: Array<UsersType>, itemId: number, objPropName: string,
                                    newObjProps: {followed:boolean}) => {
   return items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}

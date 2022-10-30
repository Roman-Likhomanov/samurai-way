import React, {useState} from 'react'
import styles from './Paginator.module.css';
import cn from 'classnames';

type UserPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<UserPropsType> = ({
                                              totalItemsCount,
                                              pageSize,
                                              currentPage,
                                              onPageChanged,
                                              portionSize = 10
                                          }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    ;

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={cn(styles.paginatorContainer)}>
        <div className={cn(styles.paginator)}>
            {portionNumber > 1 &&
                <span className={cn(styles.prev)} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</span>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <span className={cn(styles.next)} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</span>}
        </div>
    </div>
}

export default Paginator;



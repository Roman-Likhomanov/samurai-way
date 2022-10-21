import React from 'react'
import styles from './Paginator.module.css';

type UserPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<UserPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
            {
                pages.map((p, index) => {
                    return <span key={index} className={currentPage === p ? styles.selectedPage : undefined}
                                 onClick={(e) => onPageChanged(p)}>{p}</span>
                })
            }
        </div>
}

export default Paginator;
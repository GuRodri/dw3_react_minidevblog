import styles from './CreatePost.module.css'
import { useState } from 'react'
import { userInsertDocument } from '../../hooks/userInsertDocument'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {
    return (
        <>
            <div className={styles.posts}>Postagens</div>       </>
    )
}

export default CreatePost
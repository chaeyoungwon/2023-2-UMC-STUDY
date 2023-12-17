import Link from "next/link"
import Image from "next/image"
import styles from '../../css/aboutme.module.css'

export default function AboutMe(){
    return(
        <div className={styles.container}>
            {/*<div className={styles.container}>hi</div>*/}
            
            <Image 
                src='/images/profile.png'
                width={500}
                height={100}
                alt="profile"
            />
            {/*<Link href='/'>홈으로 가기</Link>*/}

            <div className={styles.rightcontainer}>
                <h3 className={styles.title}> ABOUT ME </h3>
                <div className={styles.detail}>
                    <span className={styles.label}> 이름 </span>
                    <span className={styles.info}> 원채영 </span>
                    <span className={styles.label}> 학과 </span>
                    <span className={styles.info}> 컴퓨터공학과 </span>
                    <span className={styles.label}> 나이 </span>
                    <span className={styles.info}> 21 </span>
                </div>
            </div>
        </div>
    )
}
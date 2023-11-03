import { Link } from "react-router-dom";
import { Input, Label, SocialLoginButton } from "@/components/Form";

import styles from "./AuthPage.module.scss";

const AuthPage = {
    SignIn: () => {
        return (
            <main className={styles.sign_in}>
                <div className={styles.sign_in_form}>
                    <Label className={styles.title}>로그인</Label>
                    <Input name="id" type="text" placeholder="아이디를 입력해주세요"></Input>
                    <Input name="pw" type="password" placeholder="비밀번호를 입력해주세요"></Input>

                    <div className={styles.links}>
                        <span>
                            <Input name="save" type="checkbox"></Input>
                            <Label htmlFor="save">로그인 유지하기</Label>
                        </span>

                        <span>
                            <Link>아이디 찾기</Link>
                            <Link>비밀번호 찾기</Link>
                        </span>
                    </div>

                    <Input type="submit" value="로그인" />
                </div>

                <p className={styles.sign_up_link}>
                    <span>아직 계정이 없으신가요?</span>
                    <span>
                        <Link to="/auth/signup">회원가입</Link>
                    </span>
                </p>

                <div className={styles.sep}>
                    <div className={styles.separator}>
                        <span></span>
                    </div>
                    <div>또는</div>
                    <div className={styles.separator}>
                        <span></span>
                    </div>
                </div>

                <div className={styles.social_login_container}>
                    <SocialLoginButton type="google" />
                    <SocialLoginButton type="naver" />
                    <SocialLoginButton type="kakao" />
                </div>
            </main>
        );
    },
    SignUp: () => {
        return <main className={styles.sign_up}>Sign up</main>;
    },
};

export default AuthPage;

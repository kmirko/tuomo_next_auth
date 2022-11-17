import AppDescription from './app-description';
import LoginBtn from './login-btn';

export default function Home() {
  console.log('server');
  return (
    <div>
      <LoginBtn>
        <AppDescription />
      </LoginBtn>
    </div>
  );
}

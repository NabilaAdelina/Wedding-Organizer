import FormAuth from './LayoutAuth/FormAuth'

const Login = () => {
    return (
        <FormAuth
            inputs={[
                { label: 'Alamat Email', type: 'email' }, { label: 'Kata Sandi', type: 'password' }
            ]}
            name="Masuk"
            details="Sudah punya akun?"
            path="/signup"
            navigation="Daftar"
        />
    )
}

export default Login

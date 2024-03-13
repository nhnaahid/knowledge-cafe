import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='container mx-auto flex justify-between items-center m-3 p-5 border-b-2'>
            <h1 className='text-3xl font-bold'>knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
import {InfoPosition, UserNameButton, ExitButton, Vertical, UserInfoExit, BackButton} from './UserInfoMenu.styled'

const UserInfoMenu = () => {
    return (
        <InfoPosition>
            <UserInfoExit>
                <BackButton>
                    Back
                </BackButton>
                <UserNameButton>Eric</UserNameButton>
                <Vertical></Vertical>
                <ExitButton>Exit</ExitButton>
            </UserInfoExit>
        </InfoPosition>
    )
}

export default UserInfoMenu;
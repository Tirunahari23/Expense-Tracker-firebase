import addNotification, { Notifications } from 'react-push-notification';

const Page = () => {

    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
        });
    };

    return (
      <div className="page">
        <Notifications/>
          <button onClick={buttonClick} className="button">
           Hello world.
          </button>
      </div>
    );
  }


export default Page;
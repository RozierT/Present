// i need to make a component that will be a header for the notification page
// it just needs to be simple and have a bar that says notifications with ian icon to the left of it and then i would need a button below  that that says 'mark all as read'

const NotifyHeader = ({content}) => {    
    return (
            <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full"></div>
                <h1 className="text-xl font-bold">Notifications</h1>
            </div>
            
    )
}
    
export default NotifyHeader;
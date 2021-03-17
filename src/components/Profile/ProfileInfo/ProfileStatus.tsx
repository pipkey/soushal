import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status:this.props.status
    };

    onChangeStatus=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value
        })
    };

    ActiveMode() {
        this.setState({
            editMode: true
        })};
    deActiveMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };
    componentDidUpdate(prevProps: ProfileStatusType ){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input
                        onChange={this.onChangeStatus}
                        onBlur={this.deActiveMode.bind(this)}
                        value={this.state.status}
                        autoFocus={true}
                    />
                    : <span onDoubleClick={this.ActiveMode.bind(this)}> {this.props.status} </span>
                }
            </div>

        )
    }
}


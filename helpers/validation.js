
    export const validationPassword = (data)=>{
        const newErrors = {}
        if(!data.currentPassword || data.currentPassword===''){
            newErrors.currentPassword = 'Current password must be filled'
        }
        if(!data.newPassword || data.newPassword===''){
            newErrors.newPassword = 'New password must be filled'
        }
        if(!data.repeatPassword || data.repeatPassword===''){
            newErrors.repeatPassword = 'Repeat new password must be filled'
        }
        return newErrors;
    }

    export const validationUser = (data)=>{
        const newErrors = {}
        if(!data.currentPassword || data.currentPassword===''){
            newErrors.currentPassword = 'Current password must be filled'
        }
        if(!data.newPassword || data.newPassword===''){
            newErrors.newPassword = 'New password must be filled'
        }
        if(!data.repeatPassword || data.repeatPassword===''){
            newErrors.repeatPassword = 'Repeat new password must be filled'
        }
        return newErrors;
    }

        
    const validationForgotPassword = (data)=>{
        const newErrors = {}
        if(!data.newPassword || data.newPassword===''){
            newErrors.newPassword = 'Password must must be filled'
        }
        if(!data.confirmPassword || data.confirmPassword===''){
            newErrors.lastname = 'Confirm password must be filled'
        }
        return newErrors;
    }

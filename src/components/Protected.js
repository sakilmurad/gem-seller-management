import React from 'react'
import { UserAuth } from '../context/AuthContext'
import {useRouter} from "next/router"

function Protected({children}) {
    const { user } = UserAuth();
    const router = useRouter()

    if (!user) {
        router.push("/login");
    }

    return children;
}

export default Protected
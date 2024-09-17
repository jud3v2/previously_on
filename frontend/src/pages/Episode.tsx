import React, { useEffect, useState } from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function Episode(props: any) {
    const {id} = useParams();
    return (
        <div>
            <h1>Episode</h1>
        </div>
    )
}
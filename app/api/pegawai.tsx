import axios from "axios"
import {APIUrl} from '../global'

export const getPegawaiList = async(kdsatker : string) => {
    try {
        const pegawai = await axios.get(`${APIUrl}/list_pegawai?kdsatker=${kdsatker}`, {timeout: 5000})
        return pegawai.data
    } catch (err) {
        console.log('Error', err);
        return err
    }
}

export const searchPegawai = async(kdsatker : string, q : string) => {
    try {
        const pegawai = await axios.get(`${APIUrl}/list_pegawai?kdsatker=${kdsatker}&q=${q}`, {timeout: 5000})
        return pegawai.data
    } catch (err) {
        console.log('Error', err);
        return err
    }
}

export const detailPegawai = async(nip_baru : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('nip_baru', nip_baru);
    try {
        const pegawai = await axios.post(`${APIUrl}/detail_pegawai`, postData, {timeout: 5000})
        //console.log({pegawaiList: pegawai});
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    }

}

export const pegawaiDipilih = async(nip_baru : string, triwulan : string, tahun : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('nip_baru', nip_baru);
    postData.append('tw', triwulan);
    postData.append('thn', tahun);
    try {
        const pegawai = await axios.post(`${APIUrl}/hotm_terpilih`, postData, {timeout: 5000})
        //console.log({pegawaiList: pegawai})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    }

}

export const savePilihan = async(nip_baru : string, nip_dipilih : string, triwulan : string, tahun : string, v1 : boolean, v2 : boolean, v3 : boolean, v4 : boolean, v5 : boolean, v6 : boolean, v7 : boolean, v8 : boolean, v9 : boolean, v10 : boolean) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('nip_baru', nip_baru);
    postData.append('nip_dipilih', nip_dipilih);
    postData.append('tw', triwulan);
    postData.append('thn', tahun);
    postData.append('v1', String(Number(v1)));
    postData.append('v2', String(Number(v2)));
    postData.append('v3', String(Number(v3)));
    postData.append('v4', String(Number(v4)));
    postData.append('v5', String(Number(v5)));
    postData.append('v6', String(Number(v6)));
    postData.append('v7', String(Number(v7)));
    postData.append('v8', String(Number(v8)));
    postData.append('v9', String(Number(v9)));
    postData.append('v10', String(Number(v10)));
    try {
        const pegawai = await axios.post(`${APIUrl}/hotm_simpan`, postData, {timeout: 5000})
        console.log({savePeg: pegawai.data})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    } 
}

export const hapusPilihan = async(id : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('id_hotm_pilih', id);
    try {
        const pegawai = await axios.post(`${APIUrl}/hotm_delete`, postData, {timeout: 5000})
        console.log({savePeg: pegawai.data})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    } 
}

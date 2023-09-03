import axios from "axios"
import {APIUrl} from '../global'


export const getPeriode = async() => {
    try {
        const periode = await axios.get(`${APIUrl}/periode_aktif`)
        console.log({periode:periode})
        return periode.data
    } catch (err) {
        console.log('Errorsss', err);
        return err
    }
}

export const getPegawaiList = async(kdsatker : string) => {
    try {
        const pegawai = await axios.get(`${APIUrl}/list_pegawai?kdsatker=${kdsatker}`, {timeout: 5000})
        return pegawai.data
    } catch (err) {
        console.log('Error', err);
        return err
    }
}

export const getPegawaiListInspiringLeader = async(kdsatker : string) => {
    try {
        const pegawai = await axios.get(`${APIUrl}/list_pegawai_inspiring_leader?kdsatker=${kdsatker}`, {timeout: 5000})
        return pegawai.data
    } catch (err) {
        console.log('Error', err);
        return err
    }
}

export const getPegawaiListFutureLeader = async(kdsatker : string) => {
    try {
        const pegawai = await axios.get(`${APIUrl}/list_pegawai_future_leader?kdsatker=${kdsatker}`, {timeout: 5000})
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

export const searchPegawaiInspiringLeader = async(kdsatker : string, q : string) => {
    try {
        const pegawai = await axios.get(`${APIUrl}/list_pegawai_inspiring_leader?kdsatker=${kdsatker}&q=${q}`, {timeout: 5000})
        return pegawai.data
    } catch (err) {
        console.log('Error', err);
        return err
    }
}

export const searchPegawaiFutureLeader = async(kdsatker : string, q : string) => {
    try {
        const pegawai = await axios.get(`${APIUrl}/list_pegawai_future_leader?kdsatker=${kdsatker}&q=${q}`, {timeout: 5000})
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

export const listASNBerprestasi = async(kdsatker:string, tahun : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('thn', tahun);
    postData.append('kdsatker', kdsatker);
    try {
        const pegawai = await axios.post(`${APIUrl}/list_asn_berprestasi`, postData, {timeout: 5000})
        //console.log({pegawaiList: pegawai})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    }
}

export const detailVote = async(nip_baru : string, triwulan : string, tahun : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('nip_baru', nip_baru);
    postData.append('tw', triwulan);
    postData.append('thn', tahun);
    try {
        const pegawai = await axios.post(`${APIUrl}/detail_vote`, postData, {timeout: 5000})
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
        //console.log({savePeg: pegawai.data})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    } 
}

export const saveASNBerprestasi = async(jenis: string, nip_baru : string, kdsatker : string, tahun : string, v1 : string, v2 : string, v3 : string, v4 : string, v5 : string, v6 : string, v7 : string, v8 : string, v9 : string, v10 : string, v11: string, dakung: string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('jenis', jenis);
    postData.append('nip_baru', nip_baru);
    postData.append('kdsatker', kdsatker);
    postData.append('thn', tahun);
    postData.append('v1', v1);
    postData.append('v2', v2);
    postData.append('v3', v3);
    postData.append('v4', v4);
    postData.append('v5', v5);
    postData.append('v6', v6);
    postData.append('v7', v7);
    postData.append('v8', v8);
    postData.append('v9', v9);
    postData.append('v10', v10);
    postData.append('v11', v11);
    postData.append('dakung', dakung);
    try {
        const pegawai = await axios.post(`${APIUrl}/asn_berprestasi_simpan`, postData, {timeout: 5000})
        //console.log({savePeg: pegawai.data})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    } 
}

export const saveASNBerprestasiInnovator = async(jenis: string, tipe:string, nip_baru : string, kdsatker : string, tahun : string, v1 : string, v2 : string, v3 : string, v4 : string, v5 : string, v6 : string, v7 : string, v8 : string, v9 : string, v10 : string, v11: string, dakung: string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('jenis', jenis);
    postData.append('tipe', tipe);
    postData.append('nip_baru', nip_baru);
    postData.append('kdsatker', kdsatker);
    postData.append('thn', tahun);
    postData.append('v1', v1);
    postData.append('v2', v2);
    postData.append('v3', v3);
    postData.append('v4', v4);
    postData.append('v5', v5);
    postData.append('v6', v6);
    postData.append('v7', v7);
    postData.append('v8', v8);
    postData.append('v9', v9);
    postData.append('v10', v10);
    postData.append('v11', v11);
    postData.append('dakung', dakung);
    try {
        const pegawai = await axios.post(`${APIUrl}/asn_berprestasi_innovator_simpan`, postData, {timeout: 5000})
        //console.log({savePeg: pegawai.data})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    } 
}

export const saveJustifikasi = async(nip_baru : string, triwulan : string, tahun : string, kd_satker : string, justifikasi : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('nip_baru', nip_baru); 
    postData.append('tw', triwulan);
    postData.append('thn', tahun);
    postData.append('kd_satker', kd_satker);
    postData.append('justifikasi', justifikasi);
    try {
        const pegawai = await axios.post(`${APIUrl}/hotm_simpan_justifikasi`, postData, {timeout: 5000})
        console.log({saveJust: pegawai.data})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    } 
}

export const saveJustifikasiFinal = async(nip_baru : string, triwulan : string, tahun : string, kd_satker : string, justifikasi : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('nip_baru', nip_baru); 
    postData.append('tw', triwulan);
    postData.append('thn', tahun);
    postData.append('kd_satker', kd_satker);
    postData.append('justifikasi', justifikasi);
    try {
        const pegawai = await axios.post(`${APIUrl}/hotm_simpan_justifikasi_final`, postData, {timeout: 5000})
        //console.log({saveJust: pegawai.data})
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

export const listVote = async(kd_satker : string, triwulan : string, tahun : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('kd_satker', kd_satker);
    postData.append('tw', triwulan);
    postData.append('thn', tahun);
    try {
        const pegawai = await axios.post(`${APIUrl}/list_vote`, postData, {timeout: 5000})
        //console.log({pegawaiList: pegawai})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    }

}

export const listVoteFinal = async(kd_satker : string, triwulan : string, tahun : string) => {
    //console.log({nipbaru: nip_baru})
    let postData = new FormData();
    postData.append('kd_satker', kd_satker);
    postData.append('tw', triwulan);
    postData.append('thn', tahun);
    try {
        const pegawai = await axios.post(`${APIUrl}/list_vote_final`, postData, {timeout: 5000})
        //console.log({pegawaiList: pegawai})
        return pegawai.data;
    } catch (err) {
        console.log('Error', err);
        return err
    }

}

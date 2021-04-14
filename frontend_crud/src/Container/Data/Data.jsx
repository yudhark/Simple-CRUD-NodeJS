import React, { Component, Fragment } from 'react';
import TableData from '../../Component/Data/TableData'
import axios from 'axios'

class Data extends Component {
    state = {
        pendidikan: [],
        formPendidikan: {
            _id: '',
            kelurahan: '',
            kecamatan: '',
            tahun: '',
            semester: '',
            tidakDanBelumSekolah: '',
            tidakDanBelumTamatSD: '',
            tamatSD: '',
            tamatSMP: '',
            tamatSMA: '',
            diploma1: '',
            diploma3: '',
            diploma4_s1: '',
            strata2: '',
            strata3: ''
        },
        isUpdate: false
    }

    handleInput = (event) => {
        let newFormPendidikan = { ...this.state.formPendidikan }
        newFormPendidikan[event.target.name] = event.target.value
        this.setState({
            formPendidikan: newFormPendidikan
        })
        console.log(this.state.formPendidikan);
    }

    handleSubmit = () => {
        console.log(this.state.isUpdate);
        if (this.state.isUpdate) {
            this.updateData()
        } else {
            this.addData()
        }
    }

    handleUpdate = (data) => {
        this.setState({
            formPendidikan: data,
            isUpdate: true
        })
        console.log(this.state.formPendidikan);
    }

    handleRemove = (data) => {
        axios.delete(`http://192.168.2.128:5000/data_penduduk/${data}`)
            .then((result) => {
                this.getAllData();
            })
    }

    getAllData = () => {
        axios.get('http://192.168.2.128:5000/data_penduduk')
            .then(res => {
                this.setState({
                    pendidikan: res.data
                })
                console.log(res.data);
            })

    }

    updateData = () => {
        console.log(this.state.formPendidikan._id + "\n" + this.state.formPendidikan);
        axios.patch(`http://192.168.2.128:5000/data_penduduk/${this.state.formPendidikan._id}`, this.state.formPendidikan)
            .then((res) => {
                this.getAllData()
                this.setState({
                    isUpdate: false,
                    formPendidikan: {
                        _id: '',
                        kelurahan: '',
                        kecamatan: '',
                        tahun: '',
                        semester: '',
                        tidakDanBelumSekolah: '',
                        tidakDanBelumTamatSD: '',
                        tamatSD: '',
                        tamatSMP: '',
                        tamatSMA: '',
                        diploma1: '',
                        diploma3: '',
                        diploma4_s1: '',
                        strata2: '',
                        strata3: ''
                    }
                })
            })
    }

    addData = () => {
        axios.post('http://192.168.2.128:5000/data_penduduk', this.state.formPendidikan)
            .then(res => {
                console.log(res);
                this.getAllData()
            }, (err) => {
                console.log('err', err);
            })
    }

    componentDidMount() {
        // this.getAllData()
        this.getAllData()
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid section-form">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card box-shadow">
                                <div className="card-header">Masukkan Data</div>
                                <div className="card-body container-fluid">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label htmlFor="kelurahan">Kelurahan</label>
                                            <input type="text" name="kelurahan" id="kelurahan" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.kelurahan} />
                                        </div>
                                        <div className="col-sm-3">
                                            <label htmlFor="kecamatan">Kecamatan</label>
                                            <input type="text" name="kecamatan" id="kecamatan" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.kecamatan} />
                                        </div>
                                        <div className="col-sm-3">
                                            <label htmlFor="tahun">Tahun</label>
                                            <input type="text" name="tahun" id="tahun" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.tahun} />
                                        </div>
                                        <div className="col-sm-3">
                                            <label htmlFor="semester">Semester</label>
                                            <input type="text" name="semester" id="semester" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.semester} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label htmlFor="tidakDanBelumSekolah">Tidak/Belum Sekolah</label>
                                            <input type="text" name="tidakDanBelumSekolah" id="tidakDanBelumSekolah" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.tidakDanBelumSekolah} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="tidakDanBelumTamatSD">Tidak/Belum Tamat SD</label>
                                            <input type="text" name="tidakDanBelumTamatSD" id="tidakDanBelumTamatSD" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.tidakDanBelumTamatSD} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="tamatSD">Tamat SD</label>
                                            <input type="text" name="tamatSD" id="tamatSD" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.tamatSD} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="tamatSMP">Tamat SMP</label>
                                            <input type="text" name="tamatSMP" id="tamatSMP" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.tamatSMP} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="tamatSMA">Tamat SMA</label>
                                            <input type="text" name="tamatSMA" id="tamatSMA" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.tamatSMA} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="diploma1">Diploma I</label>
                                            <input type="text" name="diploma1" id="diploma1" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.diploma1} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="diploma3">Diploma III</label>
                                            <input type="text" name="diploma3" id="diploma3" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.diploma3} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="diploma4_s1">D4/S1</label>
                                            <input type="text" name="diploma4_s1" id="diploma4_s1" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.diploma4_s1} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="strata2">S2</label>
                                            <input type="text" name="strata2" id="strata2" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.strata2} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="strata3">S3</label>
                                            <input type="text" name="strata3" id="strata3" className="form-control" onChange={this.handleInput} value={this.state.formPendidikan.strata3} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer"><button className="btn btn-primary" onClick={this.handleSubmit}>Simpan</button></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card box-shadow">
                                <div className="card-header">Tabel</div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Kelurahan</th>
                                                <th>Tidak/Belum Sekolah</th>
                                                <th>Tidak/Belum Tamat SD</th>
                                                <th>Tamat SD</th>
                                                <th>Tamat SMP</th>
                                                <th>Tamat SMA</th>
                                                <th>Tamat D1</th>
                                                <th>Tamat D3</th>
                                                <th>Tamat D4/S1</th>
                                                <th>Tamat S2</th>
                                                <th>Tamat S3</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.pendidikan.map(pend => {
                                                    return <TableData data={pend} key={pend._id} remove={this.handleRemove} update={this.handleUpdate} />
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Data;

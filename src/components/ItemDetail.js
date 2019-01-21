import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SELECT_ITEM } from '../actions/type'
import axios from "axios";
import { API_REFER } from "../actions/type";
import queryString from 'query-string';


class ItemDetail extends Component {

    state = {
        data_list: {},
        rekomendasi_list: []
    };

    componentDidMount() {
        this.getDataDetail()
        // 'http://localhost:1971/coffeeshop?nama=kopi%20kalyan'


    }
    getDataDetail = () => {
        var params = queryString.parse(this.props.location.search)
        var choose = params.choose
        var nama = params.nama
        axios.get(API_REFER + choose + '?nama=' + nama)
            .then((res) => {
                console.log(res.data);
                this.setState({ data_list: res.data[0] })
                console.log(this.state.data_list);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    // getDataLikeDislike = () => {
    //     var params = queryString.parse(this.props.location.search)
    //     var choose = params.choose
    //     axios.get(API_REFER + "likeDislike?kategori=" + choose)
    //         .then((res) => {
    //             console.log(res.data);
    //             this.setState({ like_dislike: res.data })
    //             console.log(this.state.like_dislike);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    likeFunction = (id) => {
        var params = queryString.parse(this.props.location.search)
        var choose = params.choose
        const { nama, desc, img_1, img_2, like, dislike } = this.state.data_list
        var udahdilike = like + 1;
        axios.put(API_REFER + choose + "/" + id, {
            nama, desc, img_1, img_2, like: udahdilike, dislike
        }).then((res) => {
            this.getDataDetail()
        }).catch((err) => {
            console.log(err);
        });
    }


    render() {
        const { id, nama, desc, img_1, like, dislike } = this.state.data_list
        return (

            <div className="bg-light ">
                <div className="container ">
                    <div className="row col-lg-12">
                        <div className="col-md-8 turunin">
                            <div className="card mb-8 shadow-sm">
                                <img className="card-img-top" alt="Thumbnail [100%x225]" style={{ height: '400px', width: '100%', display: 'block' }} src={img_1} data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">{nama}</p>
                                    <p className="card-text">{desc}</p>
                                    <input onClick={() => this.likeFunction(id)} value={like} type="button" className="btn btn-primary" />
                                    <div className="d-flex justify-content-between align-items-center">

                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-16">
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">

                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 turunin">
                            <div className="col-md-12">
                                <div className="card mb-4 shadow-sm">
                                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{ height: '225px', width: '100%', display: 'block' }} src="/test" data-holder-rendered="true" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">

                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card mb-4 shadow-sm">
                                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{ height: '225px', width: '100%', display: 'block' }} src="/test" data-holder-rendered="true" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">

                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card mb-4 shadow-sm">
                                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{ height: '225px', width: '100%', display: 'block' }} src="/test" data-holder-rendered="true" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">

                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card mb-4 shadow-sm">
                                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{ height: '225px', width: '100%', display: 'block' }} src="/test" data-holder-rendered="true" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">

                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div >
        )
    }
}

export default connect(null, { SELECT_ITEM })(ItemDetail)

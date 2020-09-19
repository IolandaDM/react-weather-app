import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <form id="search-form" className="mb-2">
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="search"
                                    placeholder="Type a city"
                                    className="form-control"
                                    id="input-city"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-2">
                                <input
                                    type="submit"
                                    value="Search city"
                                    className="btn btn-secondary"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-4">
                    <button
                        type="button"
                        className="btn btn-info"
                        id="current-city-button"
                    >
                        Current city
          </button>
                </div>
            </div>
        </div>
    );
}

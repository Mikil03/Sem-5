import React from "react";
import { Component } from "react";
import './Content.css'

class Content extends React.Component {
  render() {
    return (
      <div class="content">
        <table class="table1">
          <tr>
            <td class="header">Sr No.</td>
            <td class="header">Name</td>
            <td class="header">Contact</td>
            <td class="header">Email</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Achit Kimberlin</td>
            <td>(897) 798-2418</td>
            <td>ackimberl@progressenergyinc.info</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Adelicia Billington</td>
            <td>(444) 756-5173</td>
            <td>ade-billing@egl-inc.info</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Macy Highley</td>
            <td>(516) 387-0335</td>
            <td>ma-high@egl-inc.info</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Adir Duque</td>
            <td>(223) 986-4952</td>
            <td>adi_du@careful-organics.org</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Amsden Kitterman</td>
            <td>(329) 844-2810</td>
            <td>am.kitterman@egl-inc.info</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Nellwyn Highley</td>
            <td>(926) 365-8184</td>
            <td>ne.highl@acusage.net</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Nigel Giffin</td>
            <td>(805) 567-1148</td>
            <td>nigel.giffin@careful-organics.org</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Rutherford Woodard</td>
            <td>(961) 806-5987</td>
            <td>rut-woodard@arvinmeritor.info</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Melly Kimberlin</td>
            <td>(591) 658-7442</td>
            <td>mell-kimberl@careful-organics.org</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Content;

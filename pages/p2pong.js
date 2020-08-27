import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Board from "../components/Board"

export default function Home() {
  const numPlayers = 3;
  return (
    <Board numPlayers= {numPlayers}/>
  )
}

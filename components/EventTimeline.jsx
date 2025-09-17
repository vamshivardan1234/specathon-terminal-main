"use client";

export default function EventTimeline() {
  return (
    <div className="timeline">
    <h2 className="section-heading">Event Schedule</h2>
      {/* Day 1 marker */}
      <div className="day-marker">Day 1 - 19-09-2025</div>
      {/* Example Event 1 (left) */}
      <div className="timeline-item left">
        <div className="content">
          <p className="time">9:00 AM - 10:00 AM</p>
          <h3 className="title">Opening Ceremony</h3>
          <p className="desc">Welcome speech and inauguration.</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 2 (right) */}
      <div className="timeline-item right">
        <div className="content">
          <p className="time">10:30 AM - 12:00 PM</p>
          <h3 className="title">Hackathon Kickoff</h3>
          <p className="desc">Teams begin working on their projects.</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 1 (left) */}
      <div className="timeline-item left">
        <div className="content">
          <p className="time">1:30 PM - 2:00 PM</p>
          <h3 className="title">Lunch</h3>
          <p className="desc">College Canteen</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 2 (right) */}
      <div className="timeline-item right">
        <div className="content">
          <p className="time">2:00 PM - 3:00 PM</p>
          <h3 className="title">First Review</h3>
          <p className="desc">Teams need to present their idea</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 1 (left) */}
      <div className="timeline-item left">
        <div className="content">
          <p className="time">4:30 PM</p>
          <h3 className="title">Short Break</h3>
          <p className="desc">Snacks and Refreshments.</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 2 (right) */}
      <div className="timeline-item right">
        <div className="content">
          <p className="time">7:00 PM - 8:00 PM</p>
          <h3 className="title">Second Review</h3>
          <p className="desc">Teams need to show progress.</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 1 (left) */}
      <div className="timeline-item left">
        <div className="content">
          <p className="time">8:30 PM</p>
          <h3 className="title">Dinner</h3>
          <p className="desc">College Canteen</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 2 (right) */}
      <div className="timeline-item right">
        <div className="content">
          <p className="time">10:00 PM - 12:00 AM</p>
          <h3 className="title">Internal Review</h3>
          <p className="desc">Teams need to show near completing of the prototype.</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Day 2 marker */}
      <div className="day-marker">Day 2 - 20-09-2025</div>
      {/* Example Event 3 (left) */}
      <div className="timeline-item left">
        <div className="content">
          <p className="time">12:30 AM</p>
          <h3 className="title">Fun Activities</h3>
          <p className="desc">Stress relievers/Games</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 4 (right) */}
      <div className="timeline-item right">
        <div className="content">
          <p className="time">2:00 AM - 3:00 AM</p>
          <h3 className="title">Review 3</h3>
          <p className="desc">Teams present their solutions to the panel.</p>
            </div>
            <span className="circle"></span>
        </div>

        {/* Example Event 3 (left) */}
      <div className="timeline-item left">
        <div className="content">
          <p className="time">8:00 AM</p>
          <h3 className="title">Breakfast</h3>
          <p className="desc">College Canteen</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 4 (right) */}
      <div className="timeline-item right">
        <div className="content">
          <p className="time">10:00 AM - 11:00 AM</p>
          <h3 className="title">Review 4</h3>
          <p className="desc">Teams need to present their final refined solutions to the panel.</p>
            </div>
            <span className="circle"></span>

        
        </div>

        {/* Example Event 3 (left) */}
      <div className="timeline-item left">
        <div className="content">
          <p className="time">1:30 PM - 3:30 PM</p>
          <h3 className="title">Final Evaluations and Presentation</h3>
          <p className="desc">Internal and external judges review projects.</p>
        </div>
        <span className="circle"></span>
      </div>

      {/* Example Event 4 (right) */}
      <div className="timeline-item right">
        <div className="content">
          <p className="time">3:30 PM</p>
          <h3 className="title">Valedictory</h3>
          <p className="desc">Hackathon comes to a close.</p>
            </div>
            <span className="circle"></span>

        
        </div>

           </div>
  );
}
